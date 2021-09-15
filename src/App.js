import React from "react";
import "./sass/main.css";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import "aos/dist/aos.css";

const App = () => {
  return (
    <div>
      <div className="heading-primary--main">Hola, Soy Victor Balarezo</div>
      <br />
      <br />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
