import React, { useState } from "react";
import Skeleton from "./Skeleton";
import Topnav from "./Topnav";

function AddCompany() {
  const [employee, setEmployee] = useState({
    id: 0,
    reqid: 0,
    compname: "",
    compwebsite: "",
    established: "",
    turnover: "",
    active: 0,
    deleted: 0,
    entryid: 0,
    entryDate: "",
    updateUserId: "",
    lastUpdateDate: "",
    address: "",
    hiringSince: "",
    no_emp: 0,
    empName: "",
    empDesig: "",
    empEmail: "",
    empMobile: 0,
  });

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    // console.log(value);

    if (name === "empMobile" || name === "no_emp" || name === "turnover") {
      setEmployee((prevState) => ({
        ...prevState,
        [name]: parseInt(value),
      }));
      return;
    }
    setEmployee((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const createData = async () => {
    const newData = await fetch("/insertcompany", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...employee,
      }),
    }).then((res) => console.log(res));
  };

  return (
    <>
      <Skeleton />

      <div className="container" style={{ marginTop: "5.5rem" }}>
        {/* <form method="POST"> */}
        <h2 className="text-center">
          <b style={{ color: "#81181d" }}>Add Company</b>
        </h2>
        <br />
        <div className="row jumbotron">
          <div className="col-sm-6 form-group ps-5">
            <label for="name-l" className="py-2">
              <b style={{ color: "#ee4423" }}>ID</b>
            </label>
            <input
              className="form-control"
              type="number"
              name="id"
              placeholder="id"
              onChange={handleInputs}
            />
          </div>

          <div className="col-sm-6 form-group ps-5">
            <label for="name-l" className="py-2">
              <b style={{ color: "#ee4423" }}>Company Name</b>
            </label>
            <input
              type="text"
              className="form-control"
              name="compname"
              placeholder="compname"
              onChange={handleInputs}
            />
          </div>

          <div className="col-sm-6 form-group ps-5">
            <label for="name-l" className="py-2">
              <b style={{ color: "#ee4423" }}>Company Website</b>
            </label>
            <input
              className="form-control"
              name="compwebsite"
              placeholder="compwebsite"
              onChange={handleInputs}
            />
          </div>

          <div className="col-sm-6 form-group ps-5">
            <label for="name-l" className="py-2">
              <b style={{ color: "#ee4423" }}>Established In</b>
            </label>
            <input
              className="form-control"
              type="month"
              name="established"
              placeholder="established"
              onChange={handleInputs}
            />
          </div>

          <div className="col-sm-6 form-group ps-5">
            <label for="name-l" className="py-2">
              <b style={{ color: "#ee4423" }}>Turnover</b>
            </label>
            <input
              className="form-control"
              type="number"
              name="turnover"
              placeholder="turnover"
              onChange={handleInputs}
            />
          </div>

          <div className="col-sm-6 form-group ps-5">
            <label for="name-l" className="py-2">
              <b style={{ color: "#ee4423" }}>Entry Date</b>
            </label>
            <input
              className="form-control"
              type="date"
              name="entryDate"
              placeholder="entryDate"
              onChange={handleInputs}
            />
          </div>

          <div className="col-sm-6 form-group ps-5">
            <label for="name-l" className="py-2">
              <b style={{ color: "#ee4423" }}>Address</b>
            </label>
            <input
              type="text"
              className="form-control"
              name="address"
              placeholder="address"
              onChange={handleInputs}
            />
          </div>

          <div className="col-sm-6 form-group ps-5">
            <label for="name-l" className="py-2">
              <b style={{ color: "#ee4423" }}>Hiring Since</b>
            </label>
            <input
              className="form-control"
              type="month"
              name="hiringSince"
              placeholder="hiringSince"
              onChange={handleInputs}
            />
          </div>

          <div className="col-sm-6 form-group ps-5">
            <label for="name-l" className="py-2">
              <b style={{ color: "#ee4423" }}>No. of Employees</b>
            </label>
            <input
              className="form-control"
              type="number"
              name="no_emp"
              placeholder="no_emp"
              onChange={handleInputs}
            />
          </div>

          <div className="col-sm-6 form-group ps-5">
            <label for="name-l" className="py-2">
              <b style={{ color: "#ee4423" }}>Employee Name</b>
            </label>
            <input
              type="text"
              className="form-control"
              name="empName"
              placeholder="empName"
              onChange={handleInputs}
            />
          </div>

          <div className="col-sm-6 form-group ps-5">
            <label for="name-l" className="py-2">
              <b style={{ color: "#ee4423" }}>Employee Designation</b>
            </label>
            <input
              type="text"
              className="form-control"
              name="empDesig"
              placeholder="empDesig"
              onChange={handleInputs}
            />
          </div>

          <div className="col-sm-6 form-group ps-5">
            <label for="name-l" className="py-2">
              <b style={{ color: "#ee4423" }}>Employee Email</b>
            </label>
            <input
              className="form-control"
              type="email"
              name="empEmail"
              placeholder="empEmail"
              onChange={handleInputs}
            />
          </div>

          <div className="col-sm-6 form-group ps-5">
            <label for="name-l" className="py-2">
              <b style={{ color: "#ee4423" }}>Employee Contact</b>
            </label>
            <input
              className="form-control"
              type="number"
              name="empMobile"
              placeholder="empMobile"
              onChange={handleInputs}
            />
          </div>

          <br />

          <div className="form-group mb-0 d-flex justify-content-center pb-5">
            <button
              className="btn btn-primary float-right"
              style={{
                backgroundColor: "#ee4423",
                borderColor: "#ee4423",
                marginTop: "2rem",
              }}
              onClick={createData}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddCompany;
