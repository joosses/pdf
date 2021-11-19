import React from 'react'
import htmltopdf from '../functions/htmltopdf';

const ButtonCreatePdf = ({ companyName }) => {
    return (
        <div>
            <button 
                id="botonCrearPdf"
                onClick={htmltopdf(companyName)}
            >Click aquí</button>
        </div>
    )
}

export default ButtonCreatePdf;
