import React from "react";

const Post = ({ id, img, title, intro, link, ...props }) => {
  return (
    <div className="post" key={id} {...props}>
      <img src={img} alt="thumbnail" className="post__thumbnail" />
      <div className="post__preview">
        <div className="post__title">{title}</div>
        <div className="post__intro">{intro}</div>
        <a href={link}>Ver en vivo</a>
      </div>
    </div>
  );
};

export default Post;
