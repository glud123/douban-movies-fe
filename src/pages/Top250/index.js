import React, { useState, useEffect, useCallback } from "react";
import MovieItem from "./../../components/MovieItem";
import Pager from "./../../components/Pager";
import "./index.css";
const Top250 = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(1);
  useEffect(() => {
    fetch(`http://localhost:3003/api/movies/${currentPage}`)
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        setMovies(resData.data);
      });
  }, [currentPage]);
  const handlePageClick = useCallback((index) => {
    setCurrentPage(index);
  }, []);
  const handleBtnClick = () => {
    setCount(count + 1);
  };
  return (
    <div className="page">
      <div className="movies-page">
        <div>
          {movies.map((item) => {
            return <MovieItem key={item.num} itemData={item} />;
          })}
        </div>
        <Pager
          pages={10}
          currentPage={currentPage}
          onPageClick={handlePageClick}
        ></Pager>
      </div>
      <div>
        <div>{count}</div>
        <button onClick={handleBtnClick}>点我加一</button>
      </div>
    </div>
  );
};

export default Top250;
