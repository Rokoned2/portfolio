import React, { useEffect } from "react";
import Aos from "aos";
import { Lottie } from "@crello/react-lottie";
import programmer from "../lotties/8306-programming-animation.json";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <section className="section-about" data-aos="fade-up">
      <div className="row">
        <div className="col-1-of-2">
          <div className="heading-tertiary">Más sobre mi</div>
          <p>
            Soy un amante de las ciencias y todo tipo de tecnologías
            interesantes, pero encuentro un gran placer por lo visual.
          </p>
          <br />
          <p>
            Mientras tengo ideas continuamente sobre proyectos que pueda
            programar, voy a entrevistas en busca de un buen equipo con
            objetivos claros para ayudar a la sociedad.
          </p>
          <br />
          <hr />
          <br />
          <h4 className="heading-secondary">TOP EXPERTISE</h4>
          <p>Desarrollador Front End con principal enfoque en React + Redux:</p>
          <a
            href="https://drive.google.com/uc?export=download&id=1GntmmRwlEEbC-DlVMEKq6g9jUZ9S7kiq"
            download
          >
            Descargar CV
          </a>
          <div className="section-about__skills">
            <ul>
              <li>Javascript</li>
              <li>React</li>
              <li>Redux</li>
              <li>HTML/CSS</li>
              <li>SCSS</li>
            </ul>
            <ul>
              <li>Node JS</li>
              <li>GIT</li>
              <li>MongoDB</li>
              <li>Tailwind</li>
              <li>Bootstrap</li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <Lottie config={{ animationData: programmer }} />

          {/* <h3 className="heading-secondary">
            Encuéntrame en Facebook y Twitter
          </h3> */}
        </div>
      </div>
    </section>
  );
};

export default About;
