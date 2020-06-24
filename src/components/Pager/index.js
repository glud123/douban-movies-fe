import React from "react";
import "./index.css";
const Pager = (props) => {
  const { pages, currentPage, onPageClick } = props;
  const createPager = () => {
    let pager = [];
    for (let index = 0; index < pages; index++) {
      pager.push(
        <li
          key={index}
          className={`${
            index + 1 === currentPage ? "current-page" : null
          }`}
          onClick={() => handlePagerClick(index + 1)}
        >
          {index + 1}
        </li>
      );
    }
    return pager;
  };
  const handlePagerClick = (index) => {
    onPageClick(index);
  };
  return <ul className="pager">{createPager()}</ul>;
};

export default Pager;
