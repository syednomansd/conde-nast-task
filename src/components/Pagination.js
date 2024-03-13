import React from "react";
import "../styles/pagination.css"; // Import pagination.css

const Pagination = ({ onPageChange, currentPage, totalPages }) => {
  return (
    <div className="pagination">
      <button
        className="btn-outline"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span>{currentPage}</span>
      <button
        className="btn-outline"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
