
import express, { urlencoded,json } from "express";
import {join} from 'path';
import fileUpload from 'express-fileupload';
const app = express();
import {readdirSync} from 'fs'
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
    debug:true
  }));


//GLOBALS
app.set("PORT",process.env.PORT |  3002);
app.set("DXF_PATH",join(__dirname,"public","dxf"))
app.set("SVG_PATH",join(__dirname,"public","svg"))
console.log(__dirname)

//const router = express.Router


//ROUTES
app.post("/upload",(req,res)=>{
    
    if(req.files != undefined && req.files.length){
        
        const files = req.files;
        const errors =[]
        files.forEach(file => {
            /* try {
            } catch (error) {
                errors.push(error.message);
            } */
            file.mv(join(__dirname,"dxf"));

            //create other formats
            const helper = new Helper(file.data, 'utf-8')
            
            try {
              const svg = helper.toSVG()
              const svgFileName = `${fileName.split(".")[0]}.svg`; //name of the new svg file

              fs.writeFileSync(join(app.get("PATH_SVG"), `${svgFileName}`), svg, 'utf-8')
            
                console.log(join(SVGDIR,svgFileName)+' SVG written') 
            
            } catch (error) {
              console.log(error)
            }

        });

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
