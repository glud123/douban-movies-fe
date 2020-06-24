import React, { useState, useEffect } from "react";
import MovieItem from "./../../components/MovieItem";

const Top250 = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3003")
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        setMovies(resData.data);
      });
  }, []);
  return (
    <div>
      {movies.map((item) => {
        return <MovieItem key={item.num} itemData={item} />;
      })}
    </div>
  );
};

export default Top250;
