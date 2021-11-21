import React, { useState } from "react";
import './Hero.css';

const Hero = ( {getCompanyNameHero} ) => {

  return (
    <section className="home-slider" id="home">
      <div className="full-screen-bg">
        <div
          className="parallax-img parallax-effect hero-home__bg"
        ></div>
        <div className="hero-text-wrap">
          <div className="hero-text white-color fade-center-text">
            <div className="container">
              <div className="white-color text-center">
                <h1 className="kaushan-font letter-spacing-0">
                { getCompanyNameHero }
                  <br />
                  Personalizando Espacios.
                </h1>
                <h5 className="source-font">
                  Si ves esto, es porque eres importante para nosotros.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
