import React from "react";
import "./Welcome.css";

const Welcome = () => {
  return (
    <section className="white-bg" id="about">
      <div className="col-md-6 col-sm-4 bg-flex bg-flex-right">
        <div className="bg-flex-holder bg-flex-cover welcome-bg"></div>
      </div>
      <div className="container">
        <div className="col-md-5 col-sm-7 text-center">
          <h1 className="mb-0 kaushan-font orange-color font-70px">
            Normativa
          </h1>
          <h2 className="mt-10 text-uppercase font-700 letter-spacing-10">
            Contrato
          </h2>
          <div className="mt-30">
            <p className="mt-30">
              {" "}
              Las ofertas y condiciones son realizadas por vendedores esclusivos
              de la empresa, estas no pueden tener una fecha de emision
              posterior a 30 días, adicionalmente a esto existen modalidades en
              las cuales se cobra un valor adicional para poder acelerar la
              producción a escala de el porducto o servicio que desea adquirir
              esta tasa va aplicada al 25% del total.
            </p>
            <p className="mt-20">
              <a className="btn btn-orange btn-md popup-youtube remove-margin">
                Confiable
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
