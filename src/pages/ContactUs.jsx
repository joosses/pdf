import React from "react";

const ContactUs = () => {
  return (
    <section id="contact" className="white-bg form-style-one">
      <div className="container">
        <div className="row">
          <div className="col-md-8 text-center col-md-offset-2">
            <h1 className="mb-0 kaushan-font orange-color font-70px">
              Contactanos{" "}
            </h1>
            <h2 className="mt-10 text-uppercase font-700 letter-spacing-10">
              ¿Cuales son tus intereses?
            </h2>
          </div>
        </div>

        <div className="row mt-50">
          <div className="col-md-8 col-md-offset-2">
            <form
              name="contact-form"
              id="contact-form"
              action="php/contact.php"
              method="POST"
            >
              <div className="messages"></div>
              <div className="row">
                <div className="col-md-6 col-sm-6">
                  <div className="form-group">
                    <label className="sr-only" htmlFor="name">
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      required
                      placeholder="Your Name"
                      data-error="Your Name is Required"
                    />
                    <div className="help-block with-errors mt-20"></div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="form-group">
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                      required
                      data-error="Please Enter Valid Email"
                    />
                    <div className="help-block with-errors mt-20"></div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <div className="form-group">
                    <label className="sr-only" htmlFor="subject">
                      Proyecto
                    </label>
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      id="subject-2"
                      placeholder="Your Subject"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label className="sr-only" htmlFor="message">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  className="form-control"
                  id="message"
                  rows="7"
                  placeholder="Your Message"
                  required
                  data-error="Please, Leave us a message"
                ></textarea>
                <div className="help-block with-errors mt-20"></div>
              </div>
              <div className="text-left">
                <button
                  type="submit"
                  name="submit"
                  className="btn btn-outline btn-md btn-circle btn-animate remove-margin"
                >
                  <span>
                    Send Message <i className="ion-android-arrow-forward"></i>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8 text-center col-md-offset-2">
          <h1 className="mb-0 kaushan-font orange-color font-70px">
            Pronto te{" "}
          </h1>
          <h2 className="mt-10 text-uppercase font-700 letter-spacing-10">
            ¿Cuales son tus intereses?
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
