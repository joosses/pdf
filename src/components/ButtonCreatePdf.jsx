import React from 'react'
import htmltopdf from '../functions/htmltopdf';
import './ButtonCreatePdf.css'

const ButtonCreatePdf = ({ companyName }) => {



    return (
        <div className="button-pdf-container">
            <button 
                id="botonCrearPdf"
                onClick={htmltopdf(companyName)}
            >Generar documento PDF</button>
        </div>
    )
}

export default ButtonCreatePdf;
