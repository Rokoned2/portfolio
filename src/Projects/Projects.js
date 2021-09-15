import React, { useState, useEffect } from "react";
import Aos from "aos";
import Post from "../components/Post";
import data from "./projectsData";

const Projects = () => {
  const [posts, setPosts] = useState([]);
  const [visible, setVisible] = useState(6);

  useEffect(() => {
    setPosts(data);

    Aos.init({ duration: 1000 });
  }, []);

  const postsByRow = (posts, start, end) => {
    let content = [];
    for (let step = 0; step < posts.length; step += 3) {
      content.push(
        <div data-aos="fade-up" className="row">
          {posts
            .slice(start + step, end + step)
            .map(({ img, title, intro, link, id }) => {
              return (
                <div className="col-1-of-3" key={id}>
                  <Post
                    img={img}
                    title={title}
                    intro={intro}
                    link={link}
                    id={id}
                  />
                </div>
              );
            })}
        </div>
      );
    }
    return content;
  };

  const renderPosts = () => {
    const measuredPosts = posts.slice(0, visible);
    return postsByRow(measuredPosts, 0, 3);
  };

  const onLoadMore = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  return (
    <div className="browser-page-appereance">
      <div className="projects">
        <h3 className="heading-secondary">Mis Proyectos</h3>
        <br />
        {renderPosts()}
        {visible < posts.length ? (
          <button className="btn btn--green" onClick={onLoadMore}>
            Más proyectos
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Projects;
