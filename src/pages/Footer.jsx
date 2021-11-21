import React from "react";
import { sanitize } from "string-sanitizer";
import replaceSpecialCharacters from 'replace-special-characters';

const Footer = ( {getCompanyNameFooter} ) => {
  // console.log(getCompanyNameFooter);

  const sanitizeName = ( name ) => {
    name = replaceSpecialCharacters(name);
    name = sanitize.addDash(name);
    name = name.replace(".", "");
    name = name.toLowerCase();
    return name;
}
  return (
    <footer className="footer dark-block" >
      <div className="footer-main">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4">
              <div className="widget widget-text">
                {/* Logo para revision  <div className="logo logo-footer"><a href="index.html"> <img className="logo logo-display" src="assets/images/logo-footer-light.png" alt="" /></a> </div>  */}

                <div className="widget-links">
                  <ul>
                    <li>{ getCompanyNameFooter }</li>
                    <li>(569) 9 88 10 69 04</li>
                    <li>contacto@{sanitizeName(getCompanyNameFooter)}.com</li>
                    <li>www.{sanitizeName(getCompanyNameFooter)}.com</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-2">
              <div className="widget widget-links">
                <h5 className="widget-title">Areas</h5>
                <ul>
                  <li>
                    <a href="#">Edificios</a>
                  </li>
                  <li>
                    <a href="#">Letreros Volumetricos</a>
                  </li>
                  <li>
                    <a href="#">Productos decorativos</a>
                  </li>
                  <li>
                    <a href="#">Maquinaria Industrial</a>
                  </li>
                  <li>
                    <a href="#">Diseños Propios </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-2">
              <div className="widget widget-links">
                <h5 className="widget-title">Legal</h5>
                <ul>
                  <li>
                    <a href="#">Terminos y Condiciones</a>
                  </li>
                  <li>
                    <a href="#">Preguntas Frecuentes</a>
                  </li>
                  <li>
                    <a href="#">Acesoria Tecnica</a>
                  </li>
                  <li>
                    <a href="#">Protocolos y Normativas vigentes</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="widget widget-text">
                <h5 className="widget-title">Popular Tags</h5>
                <div className="popular-tags">
                  {" "}
                  <a href="#">Minimal</a> <a href="#">Design</a>{" "}
                  <a href="#">Art</a> <a href="#">Creative</a>{" "}
                  <a href="#">Ergonomic</a> <a href="#">Metal</a>{" "}
                  <a href="#">Tips</a> <a href="#">Hacks</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <ul className="social-media">
                <li>
                  <a href="#" className="ion-social-linkedin"></a>
                </li>
                <li>
                  <a href="#" className="ion-social-facebook"></a>
                </li>
                <li>
                  <a href="#" className="ion-social-twitter"></a>
                </li>
                <li>
                  <a href="#" className="ion-social-pinterest"></a>
                </li>
                <li>
                  <a href="#" className="ion-social-instagram"></a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-xs-12">
              <div className="copy-right text-right">
                © {getCompanyNameFooter} 2021. All rights reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    
  );
};

export default Footer;
