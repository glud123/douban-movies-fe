import React from "react";
import "./index.css";
const MovieItem = React.memo((props) => {
  const { img, title, link, star, num } = props.itemData;
  return (
    <div className="movie-item">
      <div className="pic">
        <em>{num}</em>
        <a href={link}>
          <img alt={title} src={img} />
        </a>
      </div>
      <div className="info">
        <a href={link} className="title">{title}</a>
        <div className="">{star}</div>
      </div>
    </div>
  );
});

export default MovieItem;
