const fs = require("fs");
const path = require("path");
const utils = require("util");
const puppeteer = require("puppeteer");
const hb = require("handlebars");
const XLSX = require("xlsx");
const FileSaver = require("file-saver");
const Blob = require("blob")

// EJECUTAR CON NODE

function leerExcel(ruta) {
    const workbook = XLSX.readFile(ruta);
    const workbookSheet = workbook.SheetNames;

    const sheet = workbookSheet[0];
    const dataExcel = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);

   const dataJson = dataExcel.map( data => console.log(data["Name"]) );

   fs.writeFile("src/resources/data.json", JSON.stringify(dataExcel), function(err, result) {
    if(err) console.log('error', err);
    });
    
   return dataJson;

}

leerExcel('src/resources/nuble.xlsx');

