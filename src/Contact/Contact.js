import React, { useEffect } from "react";
import Aos from "aos";
import emailjs from "emailjs-com";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bsxudhr",
        "template_9srn1ga",
        e.target,
        "user_vzlbK2Yfyd2ClSFcxmYbg"
      )
      .then(
        (result) => {
          alert("Enviado exitosamente");
          e.target.reset();
        },
        (error) => {
          alert("Error");
        }
      );
  }

  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="browser-page-appereance">
      <div className="section-contact" data-aos="fade">
        <h3 className="heading-secondary">Contáctame</h3>
        <br />
        <form className="form" onSubmit={sendEmail}>
          <div className="form__group">
            <input
              id="name"
              name="name"
              type="text"
              className="form__input"
              placeholder="Nombre completo"
              required=""
            />
            <label htmlFor="name" className="form__label">
              Nombre completo
            </label>
          </div>
          <div className="form__group">
            <input
              id="subject"
              name="subject"
              type="text"
              className="form__input"
              placeholder="Asunto"
              required=""
            />
            <label htmlFor="subject" className="form__label">
              Asunto
            </label>
          </div>
          <div className="form__group">
            <input
              id="email"
              name="email"
              type="email"
              className="form__input"
              placeholder="Email address"
              required=""
            />
            <label htmlFor="email" className="form__label">
              Email address
            </label>
          </div>
          <div className="form__group">
            <input
              id="message"
              name="message"
              type="text"
              className="form__input"
              placeholder="Mensaje"
              required=""
            />
            <label htmlFor="email" className="form__label">
              Mensaje
            </label>
          </div>
          <div className="form__group">
            <input className="btn btn--green" type="submit" value="Enviar" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
