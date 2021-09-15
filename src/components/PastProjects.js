import React, { useEffect } from "react";
import Post from "./Post";
import Aos from "aos";

import hitel from "../images/hitel.png";
import trava from "../images/exterior.png";
import reactReduxAuth from "../images/react-redux-auth.png";

const PastProjects = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <section className="section-past-projects">
      <div data-aos="fade-up">
        <div className="heading-secondary">Mis Últimos Proyectos</div>
        <br />
        <div className="row">
          <div className="col-1-of-3">
            <Post
              img={hitel}
              title="Hitel"
              intro="Diseñado y construido para servir de homepage en página de calificaciones de hoteles."
              link="https://naughty-albattani-442cb9.netlify.app/"
            />
          </div>
          <div className="col-1-of-3">
            <Post
              img={trava}
              title="Trava"
              intro="Diseñado y construido para servir de homepage en página de viajes."
              link="https://jolly-dijkstra-f9614a.netlify.app/"
            />
          </div>
          <div className="col-1-of-3">
            <Post
              img={reactReduxAuth}
              title="React-Redux autentificación"
              intro="Authentificación eficiente usando React-Redux"
              link="https://jovial-babbage-95caed.netlify.app/"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastProjects;
