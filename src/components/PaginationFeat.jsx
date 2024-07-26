import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";

const PaginationFeat = ({ currentPage, itemPerPage, totalItem, paginate }) => {
  const totalPage = Math.ceil(totalItem / itemPerPage);
  const paginationNumber = [];

  for (let i = 1; i <= totalPage; i++) {
    paginationNumber.push(i);
  }

  return (
    <div className={` items-center gap-5 ${totalPage > 1 ? "flex" : "hidden"}`}>
      <button
        onClick={() => paginate(currentPage - 1)}
        className={`bg-clr-accent text-white p-2 rounded-full ${
          currentPage === 1 && "cursor-not-allowed"
        }`}
      >
        <MdOutlineArrowBackIos />
      </button>
      <button
        onClick={() => paginate(currentPage + 1)}
        className={` bg-clr-accent text-white p-2 rounded-full ${
          currentPage === totalPage && "cursor-not-allowed"
        }`}
      >
        <MdOutlineArrowForwardIos />
      </button>
    </div>
  );
};

export default PaginationFeat;
