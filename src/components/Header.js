import React, { useEffect } from "react";
import profileImage from "../images/profile-image.jpeg";
import Aos from "aos";

const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <header className="header">
      <div className="row" data-aos="fade">
        <div className="col-1-of-2">
          <figure className="header__profile-shape">
            <img
              className="header__profile-img"
              src={profileImage}
              alt="perfil-img"
            />
            <figcaption className="header__profile-caption">
              Victor Balarezo
            </figcaption>
          </figure>
        </div>
        <div className="col-1-of-2">
          <div className="header__preview">
            <div className="header__preview-content">
              <div className="header__preview-corner--tl"></div>
              <div className="header__preview-corner--tr"></div>
              <h3 className="heading-secondary">¿Qué hago?</h3>
              <p>
                Soy un Programador Frontend que cree en el diseño como una
                necesidad.
              </p>
              <div className="header__preview-corner--bl"></div>
              <div className="header__preview-corner--br"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
