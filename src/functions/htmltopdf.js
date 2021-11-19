import { addUnderscore } from "string-sanitizer";
import replaceSpecialCharacters from "replace-special-characters";

const html2pdf = require("html2pdf-jspdf2");

const htmltopdf = (getCompanyName) => {
  const sanitizeName = (name) => {
    name = replaceSpecialCharacters(name);
    name = addUnderscore(name);
    name = name.replace(".", "");
    name = name.toLowerCase();
    return name;
  };


  document.addEventListener("DOMContentLoaded", () => {
    // Escuchamos el click del botón
    const $boton = document.querySelector("#botonCrearPdf");

    $boton.addEventListener("click", () => {
      const $elementoParaConvertir = document.querySelector(".wrapper"); // <-- Aquí puedes elegir cualquier elemento del DOM
      html2pdf()
        .set({
          margin: 0.25,
          filename: `${sanitizeName(getCompanyName)}.pdf`,
          image: {
            type: "jpeg",
            quality: 0.98,
          },
          html2canvas: {
            scale: 3, // A mayor escala, mejores gráficos, pero más peso
            letterRendering: true,
          },
          jsPDF: {
            unit: "in",
            format: "a2",
            orientation: "portrait", // landscape o portrait
          },
          pageBreak: {
            mode: ["avoid-all", "css", "legacy"],
          },
        })
        .from($elementoParaConvertir)
        .save()
        .catch((err) => console.log(err));
    });
  });
};

export default htmltopdf;
