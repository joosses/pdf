
import express, { urlencoded,json } from "express";
import {join} from 'path';
import fileUpload from 'express-fileupload';
const app = express();
import {readdirSync,readFileSync,writeFileSync} from 'fs'
import morgan from 'morgan'
import {Helper} from '../helpers/dxf2svg/index'
import cors from 'cors'
//MIDDLEWARES
app.use(morgan())
app.use(cors())
app.use('/public', express.static(join(__dirname, 'public')))
app.use(urlencoded({extended:true}))
app.use(json())
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },    
}));


//GLOBALS
app.set("PORT",process.env.PORT |  3002);
app.set("DXF_PATH",join(__dirname,"public","dxf"))
app.set("SVG_PATH",join(__dirname,"public","svg"))
console.log(__dirname)

//const router = express.Router


//ROUTES
app.post("/upload",async (req,res)=>{
    
    console.log(req.files)

    if(req.files != undefined){
        console.log("Asasd")
  
        
        const files = req.files;
       // console.log(files)
        const errors =[]
        for(let index in files) {
            /* try {
            } catch (error) {
                errors.push(error.message);
            } */
            
            const fileName=files[index].name;
            const filePath = join(app.get("DXF_PATH"),fileName)
            await files[index].mv(filePath);

            //create other formats
            const dxfFile = readFileSync(filePath);

           console.log(dxfFile)

        }

        return errors.length ? res.json({errors:errors}) : res.json({ok:true});
    }
})


app.get("/svg/get",async function(req,res){
    
    const svgFiles = readdirSync(app.get("SVG_PATH"))
    res.json({
        svgs:svgFiles.map((filename)=>join("public",app.get("SVG_PATH"),filename))
    })
})



app.use((req,res)=>{
    
    res.status(404)
    
    res.send("resource not found")
})
app.listen(app.get("PORT"),()=>console.log("listening on port "+app.get("PORT")))
