import React from "react";
// https://mui.com/components/pagination/#basic-pagination of react 
import Pagination from "@material-ui/lab/Pagination";
import "./CustomPagination.css";


export default function CustomPagination({ setPage, numOfPages = 10 }) {
  // Scroll to top when page changes
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 15,
      }}
    >
        <Pagination
          onChange={(e) => handlePageChange(e.target.textContent)}
          count={numOfPages}
          color="secondary"
          variant="outlined" 
          shape="rounded"
          hideNextButton
          hidePrevButton
        />
   
    </div>
  );
}
