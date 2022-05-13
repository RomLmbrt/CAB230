import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import { Button, Badge } from "reactstrap";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

import "../App.css";
import { useVolcanoList } from "../api";

/*display the grid*/
export default function VolcanoList() {
  const navigate = useNavigate();
  const { loading, rowData, error } = useVolcanoList();
  
  if (loading) {
    return <p>Loading...</p>;
  };

  if(error !== null) {
    return <p>Error: {error}</p>
  };

  const columns = [
    { headerName: "Title", field: "title", sortable: true, filter: true },
    { headerName: "Author", field: "author" },
    { headerName: "Edition Count", field: "editionCount" },
    { headerName: "Book ID", field: "id" }
  ];

  return (
    <div className="container">
      <h1>Book Catalogue</h1>
      <p>
        <Badge color="success">{rowData.length}</Badge> Books published in 2000
        in the Drama category
      </p>
      <div
        className="ag-theme-balham"
        style={{
          height: "300px",
          width: "800px"
        }}
      >
          <AgGridReact
          rowData={rowData}
          columnDefs={columns}
          pagination
          paginationPageSize={7}
          onRowClicked={(row) => navigate(`/VolcanoList/Volcano?Name=${row.data.title}`)}
          />

      </div>
    </div>
  );
}