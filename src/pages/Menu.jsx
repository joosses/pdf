import React from "react";

import Gallery1 from '../assets/images/gallery/gallery-img.png';
import Gallery2 from '../assets/images/gallery/gallery-img-2.png';
import Gallery3 from '../assets/images/gallery/gallery-img-3.png';

const Menu = () => {
  return (
    <section id="menu" className="dark-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-8 text-center col-md-offset-2">
            <h1 className="mb-0 kaushan-font orange-color font-70px">
              Nuestros productos y servicios
            </h1>
            <h2 className="mt-10 text-uppercase font-700 letter-spacing-10 white-color">
              Categoria Metalica
            </h2>
          </div>
        </div>

        <div className="row mt-50">
          <div className="col-md-6">
            <img src={Gallery1} alt="gallery" />
          </div>
          <div className="col-md-6">
            <div className="circle-content-box pt-50 pr-50 pb-50 pl-50 mt-80">
              <div className="menu-text-content">
                <div className="row">
                  <div className="col-md-8">
                    <h3>
                      Orientado a edificios departamentos y cambio de ambientes
                    </h3>
                    <h6>julienne vegetables, crunchy noodles, beef</h6>
                  </div>
                  <div className="col-md-4">
                    <h3>$31</h3>
                    <div className="mt-20">
                      <span className="label label-default">Order</span>
                    </div>
                  </div>
                </div>
              </div>

              <p>
                Terminaciones presisas con un uso estructurar o estetico para
                interiores y exteriores.
              </p>
            </div>

            <div className="circle-content-box pt-50 pr-50 pb-50 pl-50 mt-50">
              <div className="menu-text-content">
                <div className="row">
                  <div className="col-md-8">
                    <h3>beef tartare</h3>
                    <h6>home fries fried in duck fat, coleslaw</h6>
                  </div>
                  <div className="col-md-4">
                    <h3>$37</h3>
                    <div className="mt-20">
                      <span className="label label-default">Order</span>
                    </div>
                  </div>
                </div>
              </div>

              <p>
                Foam padding in the insoles leather finest quality staple flat
                slip-on design pointed toe off-duty shoe. Black knicker lining
                concealed back zip fasten swing style high waisted double layer
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-50">
          <div className="col-md-6">
            <div className="circle-content-box pt-50 pr-50 pb-50 pl-50 mt-80">
              <div className="menu-text-content">
                <div className="row">
                  <div className="col-md-8">
                    <h3>Acesoramiento y diseños originales</h3>
                    <h6>Metales normativos de 2mm hasta 20 mm </h6>
                  </div>
                  <div className="col-md-4">
                    <h3>$</h3>
                    <div className="mt-20">
                      <span className="label label-default">Order</span>
                    </div>
                  </div>
                </div>
              </div>

              <p>
                Foam padding in the insoles leather finest quality staple flat
                slip-on design pointed toe off-duty shoe. Black knicker lining
                concealed back zip fasten swing style high waisted double layer
              </p>
            </div>

            <div className="circle-content-box pt-50 pr-50 pb-50 pl-50 mt-50">
              <div className="menu-text-content">
                <div className="row">
                  <div className="col-md-8">
                    <h3>fish of the day</h3>
                    <h6>
                      different fish every day of the week, ask stuff for
                      assistance
                    </h6>
                  </div>
                  <div className="col-md-4">
                    <h3>$49</h3>
                    <div className="mt-20">
                      <span className="label label-default">Order</span>
                    </div>
                  </div>
                </div>
              </div>

              <p>
                Foam padding in the insoles leather finest quality staple flat
                slip-on design pointed toe off-duty shoe. Black knicker lining
                concealed back zip fasten swing style high waisted double layer
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <img src={Gallery2} alt="gallery" />
          </div>
        </div>

        <div className="row mt-50">
          <div className="col-md-6">
            <img src={Gallery3} alt="gallery" />
          </div>
          <div className="col-md-6">
            <div className="circle-content-box pt-50 pr-50 pb-50 pl-50 mt-80">
              <div className="menu-text-content">
                <div className="row">
                  <div className="col-md-8">
                    <h3>Soldadura y Maqueteado </h3>
                    <h6>ven con tu idea nosotros la hacemos realidad</h6>
                  </div>
                  <div className="col-md-4">
                    <h3>$</h3>
                    <div className="mt-20">
                      <span className="label label-default">Order</span>
                    </div>
                  </div>
                </div>
              </div>

              <p>
                Foam padding in the insoles leather finest quality staple flat
                slip-on design pointed toe off-duty shoe. Black knicker lining
                concealed back zip fasten swing style high waisted double layer
              </p>
            </div>

            <div className="circle-content-box pt-50 pr-50 pb-50 pl-50 mt-50">
              <div className="menu-text-content">
                <div className="row">
                  <div className="col-md-8">
                    <h3>chocolate cheesecake</h3>
                    <h6>
                      banana cream, raspberries, banana sorbet, white and milk
                      chocolate
                    </h6>
                  </div>
                  <div className="col-md-4">
                    <h3>$22</h3>
                    <div className="mt-20">
                      <span className="label label-default">Order</span>
                    </div>
                  </div>
                </div>
              </div>

              <p>
                Foam padding in the insoles leather finest quality staple flat
                slip-on design pointed toe off-duty shoe. Black knicker lining
                concealed back zip fasten swing style high waisted double layer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
