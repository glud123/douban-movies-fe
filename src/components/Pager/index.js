import React from "react";
import "./index.css";
const Pager = React.memo((props) => {
  const { pages, currentPage, onPageClick } = props;
  const createPager = () => {
    let pager = [];
    for (let index = 0; index < pages; index++) {
      pager.push(
        <li
          key={index}
          className={`${index + 1 === currentPage ? "current-page" : null}`}
          onClick={() => onPageClick(index + 1)}
        >
          {index + 1}
        </li>
      );
    }
    return pager;
  };
  const pagerList = createPager();
  return <ul className="pager">{pagerList}</ul>;
});

export default Pager;
