
import express, { urlencoded, json } from "express";
import { join } from 'path';
import fileUpload from 'express-fileupload';
const app = express();
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'fs'
import morgan from 'morgan'
import { Helper } from '../helpers/dxf2svg/index'
import cors from 'cors'
import { execFileSync } from "child_process";
//MIDDLEWARES
app.use(morgan())
app.use(cors())
app.use('/public', express.static(join(__dirname, 'public')))
app.use(urlencoded({ extended: true }))
app.use(json())
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
}));


//GLOBALS
app.set("PORT", process.env.PORT | 3002);
app.set("DXF_PATH", join(__dirname, "public", "dxf"))
app.set("SVG_PATH", join(__dirname, "public", "svg"))


//const router = express.Router


// Load DMX Files
const dmxFiles = readdirSync(app.get("DXF_PATH"))
dmxFiles.map((filename) => {
    let svgFilename = `${filename.substring(0, filename.lastIndexOf('.'))}.svg`
    svgFilename = join(app.get("SVG_PATH"), svgFilename)
    // skip if svg already exists
    if (existsSync(svgFilename)) { 
        return null;
    }
    console.log(svgFilename, existsSync(svgFilename))
    const buffer = readFileSync(join(app.get("DXF_PATH"), filename))
    const data = buffer.toString()
    const helper = new Helper(data);
    helper.parse();
    const svg = helper.toSVG(); 

    writeFileSync(svgFilename, svg)
})

console.log("Loaded all .DMX Files")


//ROUTES
app.post("/upload", async (req, res) => {

    console.log(req.files)

    if (req.files != undefined) {
        console.log("Asasd")


        const files = req.files;
        // console.log(files)
        const errors = []
        for (let index in files) {
            /* try {
            } catch (error) {
                errors.push(error.message);
            } */

            const fileName = files[index].name;
            const filePath = join(app.get("DXF_PATH"), fileName)
            await files[index].mv(filePath);

            //create other formats
            const dxfFile = readFileSync(filePath);

            console.log(dxfFile)

        }

        return errors.length ? res.json({ errors: errors }) : res.json({ ok: true });
    }
})


app.get("/svg/get", async function (req, res) {

    const svgFiles = readdirSync(app.get("SVG_PATH"))
    res.json({
        svgs: svgFiles.map((filename) => `public/svg/${filename}`)
    })
})



app.use((req, res) => {
    res.status(404)
    res.send("resource not found")
})
app.listen(app.get("PORT"), () => console.log("listening on port " + app.get("PORT")))
