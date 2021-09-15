import React from "react";
import About from "../components/About";
import Header from "../components/Header";
import PastProjects from "../components/PastProjects";

const Home = () => {
  return (
    <>
      <div className="browser-page-appereance">
        <Header />
        <About />
        <PastProjects />
      </div>
    </>
  );
};

export default Home;
