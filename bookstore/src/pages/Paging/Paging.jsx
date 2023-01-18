import React from "react";
import Pagination from "@mui/material/Pagination";
import "./paging.css";

const Paging = ({ itemsCount, pageSize, handleChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount == 1) return null;
  return (
    <div className="main-container-pagination">
      <div className="PagNumberClass">
        <Pagination
          count={pagesCount}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
          sx={{ width: "50%", margin: "0px" }}
        />
      </div>
    </div>
  );
};

export default Paging;
