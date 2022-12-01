import React, { useState, useEffect } from "react";
import Topnav from "./Topnav";
import DataTable, { createTheme } from "react-data-table-component";
import FilterComponent from "./FilterComponent";
import Skeleton from "./Skeleton";
import { Link } from "react-router-dom";

function DisplayCompany() {
  const [returnedData, setReturnedData] = useState([]);

  const columns = [
    {
      name: "ID",
      selector: (row) => row.PLA_COMPANY_ID,
      sortable: true,
    },
    {
      name: "Location",
      selector: (row) => row.COMPANY_ADDRESS,
      sortable: true,
    },
    {
      name: "Company",
      selector: (row) => row.COMPANY_NAME,
      sortable: true,
    },
    {
      name: "Website",
      selector: (row) => row.COMPANY_WEBSITE,
      sortable: true,
    },
    {
      name: "Employees",
      selector: (row) => row.NO_OF_EMPLOYEES,
      sortable: true,
    },
  ];

  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);
  const filteredItems = returnedData.filter(
    (item) =>
      item.COMPANY_NAME &&
      item.COMPANY_NAME.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  useEffect(() => {
    (async () => {
      const newData = await fetch("/fetchcompany", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }).then((res) => res.json());

      setReturnedData(newData);
    })();
  }, []);

  return (
    <>
      <Skeleton />
      <div className="container" style={{ marginTop: "7.5rem" }}>
        <div>
          <h2 className="text-center" style={{ marginTop: "0rem" }}>
            <b style={{ color: "#81181d" }}>Company</b>
            <Link to="/addcompany">
              <button
                className="btn btn-primary float-right"
                style={{
                  backgroundColor: "#81181D",
                  borderColor: "#81181D",
                  marginBottom: "3rem",
                  // marginTop: "1rem",
                }}
              >
                Add Company
              </button>
            </Link>
          </h2>
        </div>
        {console.log(returnedData)}
        <DataTable
          columns={columns}
          data={filteredItems}
          pagination
          paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
          subHeader
          subHeaderComponent={subHeaderComponentMemo}
        />
      </div>
    </>
  );
}

export default DisplayCompany;
