import React, { useState } from "react";
import Topnav from "./Topnav";

function AddCompany() {
  const [returnedData, setReturnedData] = useState(["hello"]);
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

  const fetchData = async () => {
    console.log(employee);
    const newData = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: employee.name,
      }),
    }).then((res) => res.json());
    console.log("NEW DATA ", newData);

    setReturnedData(newData[0]);
    console.log("CHECKING NEW DATA ", returnedData);
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
    // console.log("NEW DATA ", newData);

    // setReturnedData(newData[0]);
    // console.log("CHECKING NEW DATA ", returnedData);
  };

  return (
    <>
      <Topnav />
      <div className="container" style={{ marginTop: "7.5rem" }}>
        {/* <form method="POST"> */}
        <h2 style={{ marginTop: "4rem" }} className="text-center">
          <b style={{ color: "#81181d" }}>Add Company</b>
        </h2>
        <br />

        <input
          type="number"
          name="id"
          placeholder="id"
          onChange={handleInputs}
        ></input>
        <input
          name="compname"
          placeholder="compname"
          onChange={handleInputs}
        ></input>
        <input
          name="compwebsite"
          placeholder="compwebsite"
          onChange={handleInputs}
        ></input>
        <input
          type="month"
          name="established"
          placeholder="established"
          onChange={handleInputs}
        ></input>
        <input
          type="number"
          name="turnover"
          placeholder="turnover"
          onChange={handleInputs}
        ></input>
        <input
          type="date"
          name="entryDate"
          placeholder="entryDate"
          onChange={handleInputs}
        ></input>
        <input
          name="address"
          placeholder="address"
          onChange={handleInputs}
        ></input>
        <input
          type="month"
          name="hiringSince"
          placeholder="hiringSince"
          onChange={handleInputs}
        ></input>
        <input
          type="number"
          name="no_emp"
          placeholder="no_emp"
          onChange={handleInputs}
        ></input>
        <input
          name="empName"
          placeholder="empName"
          onChange={handleInputs}
        ></input>
        <input
          name="empDesig"
          placeholder="empDesig"
          onChange={handleInputs}
        ></input>
        <input
          type="email"
          name="empEmail"
          placeholder="empEmail"
          onChange={handleInputs}
        ></input>
        <input
          type="number"
          name="empMobile"
          placeholder="empMobile"
          onChange={handleInputs}
        ></input>

        <br />
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold"
          onClick={fetchData}
        >
          Click
        </button>

        <br />
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold"
          onClick={createData}
        >
          Create
        </button>

        {/* <div className="row jumbotron">
            <div className="col-sm-6 form-group pe-5">
              <label for="name-f" className="py-2">
                <b style={{ color: "#ee4423" }}> Name of Company</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="compName"
                id="name-f"
                placeholder="ABC"
                value={jdData.compName}
                onChange={handleInputs}
                required
              />
            </div>
            <div className="col-sm-6 form-group ps-5">
              <label for="name-l" className="py-2">
                <b style={{ color: "#ee4423" }}>Company URL</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="compUrl"
                id="name-l"
                placeholder="www.abc.com"
                value={jdData.compUrl}
                onChange={handleInputs}
                required
              />
            </div>
            <div className="col-sm-6 py-3 form-group pe-5">
              <label for="email" className="py-2">
                <b style={{ color: "#ee4423" }}>
                  Description of Company and/or Division
                </b>
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="4"
                placeholder="ABC start up. We are an accredited partner to Automation
                Anywhere – one of the leading RPA firms in the world today."
                name="description"
                value={jdData.description}
                onChange={handleInputs}
                required
              ></textarea>
            </div>

            <div className="col-sm-6 py-3 form-group ps-5">
              <label for="address-1" className="py-2">
                <b style={{ color: "#ee4423" }}>Work Mode</b>
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="4"
                placeholder="Work from Home / Office, due to Covid-19, Work from Home but once situation improves then work from office."
                name="mode"
                value={jdData.mode}
                onChange={handleInputs}
                required
              ></textarea>
            </div>

            <div className="col-sm-6 form-group pe-5">
              <label for="address-2" className="py-2">
                <b style={{ color: "#ee4423" }}>
                  Do you give consent / right to use Co. Name & Logo
                </b>
              </label>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="radio1"
                  name="consent"
                  value="yes"
                  onChange={handleInputs}
                />{" "}
                Yes
                <label className="form-check-label" for="radio1"></label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="radio2"
                  name="consent"
                  value="no"
                  onChange={handleInputs}
                />
                No
                <label className="form-check-label" for="radio2"></label>
              </div>
            </div>
            <div className="col-sm-4 form-group pe-5 ps-5">
              <label for="State" className="py-2">
                <b style={{ color: "#ee4423" }}>Internship Role / Job Title</b>
              </label>
              <input
                type="address"
                className="form-control"
                name="role"
                id="State"
                placeholder="Software Intern"
                value={jdData.role}
                onChange={handleInputs}
                required
              />
            </div>
            <div className="col-sm-2 form-group">
              <label for="zip" className="py-2">
                <b style={{ color: "#ee4423" }}>Job Location</b>
              </label>
              <input
                type="zip"
                className="form-control"
                name="location"
                id="zip"
                placeholder="Pune"
                value={jdData.location}
                onChange={handleInputs}
                required
              />
            </div>
            <div className="col-sm-6 py-3 form-group pe-5">
              <label for="ctc" className="py-2">
                <b style={{ color: "#ee4423" }}>
                  Stipend & CTC Offered (Post Internship)
                </b>
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="2"
                placeholder="20K pm stipend during internship. We will also take care of commute and food, for office as required."
                name="stipend"
                value={jdData.stipend}
                onChange={handleInputs}
                required
              ></textarea>
            </div>
            <div className="col-sm-6 py-3 form-group ps-5">
              <label for="Date" className="py-2">
                <b style={{ color: "#ee4423" }}>Company Selection Date</b>
              </label>
              <input
                type="Date"
                name="date"
                className="form-control"
                id="Date"
                placeholder=""
                value={jdData.date}
                onChange={handleInputs}
                required
              />
            </div>
            <div className="col-sm-12 form-group">
              <label for="selection" className="py-2">
                <b style={{ color: "#ee4423" }}>
                  Selection Process / Mode of Selection
                </b>
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
                placeholder="1. CV Shortlisting
                2. Virtual / Online Written Test
                3. Virtual Technical Interview
                4. HR / Personal Interview
                5. Virtual Assignment"
                name="process"
                value={jdData.process}
                onChange={handleInputs}
                required
              ></textarea>
            </div>

            <div className="col-sm-6 py-3 form-group pe-5">
              <label for="Edu" className="py-2">
                <b style={{ color: "#ee4423" }}>Educational Qualification</b>
              </label>
              <select
                id="Qualification"
                className="form-control browser-default custom-select"
                name="qualification"
                value={jdData.qualification}
                onChange={handleInputs}
              >
                <option value="B.Tech CSE">B.Tech. in Computer Science</option>
                <option value="B.Tech ECE">
                  B.Tech. in Electronics and Communications
                </option>
                <option value="B.Tech Biotech">B.Tech. in Biotechnology</option>
                <option value="iMBA">iMBA</option>
              </select>
            </div>
            <div className="col-sm-4 py-3 form-group pe-5 ps-5">
              <label for="year" className="py-2">
                <b style={{ color: "#ee4423" }}>Year of Graduation</b>
              </label>
              <input
                type="number"
                name="gradDate"
                className="form-control"
                id="pass2"
                placeholder="2023"
                value={jdData.gradDate}
                onChange={handleInputs}
                required
              />
            </div>
            <div className="col-sm-2 py-3 form-group">
              <label for="zip" className="py-2">
                <b style={{ color: "#ee4423" }}>No. of Positions</b>
              </label>
              <input
                type="number"
                className="form-control"
                name="positions"
                id="zip"
                placeholder="5"
                value={jdData.positions}
                onChange={handleInputs}
                required
              />
            </div>

            <div className="col-sm-6 form-group pe-5">
              <label for="JD" className="py-2">
                <b style={{ color: "#ee4423" }}>Job Descriptions</b>
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="4"
                placeholder="1. The candidate must have excellent spoken English and
                presentation skills
                2. Must know development and coding
                3. Should be open to travel"
                name="jd"
                value={jdData.jd}
                onChange={handleInputs}
                required
              ></textarea>
            </div>
            <div className="col-sm-6 form-group ps-5">
              <label for="skills" className="py-2">
                <b style={{ color: "#ee4423" }}>Other Important Skills</b>
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="4"
                placeholder="Self driven, motivated, excellent communication & interpersonal skills
                Independent player. Presentation skills for client facing trainings."
                name="others"
                value={jdData.others}
                onChange={handleInputs}
                required
              ></textarea>
            </div>
            <div className="col-sm-12 py-3 form-group">
              <label for="bond" className="py-2">
                <b style={{ color: "#ee4423" }}>
                  Service Bond / Agreement / Contract (Specify details If any)
                </b>
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="4"
                placeholder=""
                name="details"
                value={jdData.details}
                onChange={handleInputs}
                required
              ></textarea>
            </div>
            <div className="col-sm-12">
              <label for="chb" className="form-check-label">
                &nbsp;
              </label>
            </div>
            <div className="form-group mb-0 d-flex justify-content-center pb-5">
              <button
                className="btn btn-primary float-right"
                style={{ backgroundColor: "#ee4423", borderColor: "#ee4423" }}
                onClick=""
              >
                Submit
              </button>
            </div>
          </div> */}
        {/* </form> */}
      </div>
    </>
  );
}

export default AddCompany;
