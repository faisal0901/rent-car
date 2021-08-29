import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

export default function Pagination({
  totalPage,
  nextPage,
  prevPage,
  id,
  activePage,
  style,
}) {
  const pagination = [];
  for (let i = 0; i < totalPage; i++) {
    pagination.push(
      <Link
        key={`link-${i}`}
        to={`/search?city=${id}&page=${i + 1}`}
        aria-current="page"
        className={`z-10   relative inline-flex items-center px-4 py-2 border text-sm font-medium  ${
          activePage === i + 1
            ? "border-blue-500 text-blue-600"
            : "border-gray-300 text-gray-500 "
        }`}
      >
        {i + 1}
      </Link>
    );
  }
  return (
    <nav
      className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px "
      aria-label="Pagination"
      style={{ style }}
    >
      <Link
        to={
          prevPage !== null
            ? `/search?city=${id}&page=${prevPage}`
            : `/search?city=${id}`
        }
        className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
      >
        <span className="sr-only">Previous</span>

        <svg
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </Link>
      {pagination}
      <Link
        to={
          nextPage !== null
            ? `/search?city=${id}&page=${nextPage}`
            : `/search?city=${id}&page=${totalPage}`
        }
        className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
      >
        <span className="sr-only">Next</span>

        <svg
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </Link>
    </nav>
  );
}
Pagination.propTypes = {
  totalPage: propTypes.number,
  nextPage: propTypes.number,
  prevPage: propTypes.number,
  id: propTypes.number,
};
