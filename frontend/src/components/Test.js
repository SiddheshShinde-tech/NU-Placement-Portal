import React, { useState, useEffect } from "react";
import Topnav from "./Topnav";

function Test() {
  const [jdData, setJdData] = useState({
    compName: "",
    compUrl: "",
    description: "",
    mode: "",
    consent: "",
    role: "",
    location: "",
    stipend: "",
    date: "",
    process: "",
    qualification: "",
    gradDate: "",
    positions: "",
    jd: "",
    others: "",
    details: "",
  });

  let name, value;

  const [returnedData, setReturnedData] = useState(["hello"]);
  const [employee, setEmployee] = useState({
    id: 0,
    name: "",
    shortname: "",
    active: 0,
    deleted: 0,
    entryid: 0,
    entryDate: "",
    updateUserId: "",
    lastUpdateDate: "",
  });

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    console.log(value);
    // setJdData({ ...jdData, [name]: value });
    if (name === "id" || name === "active" || name === "deleted" || name === "entryid") {
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
        "Accept": "application/json"
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
    const newData = await fetch("/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        ...employee,
      }),
    }).then((res) => res.json());
    // console.log("NEW DATA ", newData);

    // setReturnedData(newData[0]);
    // console.log("CHECKING NEW DATA ", returnedData);
  };

  return (
    <>
      <input
        type="number"
        name="id"
        placeholder="id"
        onChange={handleInputs}
      ></input>
      <input name="name" placeholder="name" onChange={handleInputs}></input>
      <input
        name="shortname"
        placeholder="shortname"
        onChange={handleInputs}
      ></input>
      <input
        type="number"
        name="active"
        placeholder="active"
        onChange={handleInputs}
      ></input>
      <input
        type="number"
        name="deleted"
        placeholder="deleted"
        onChange={handleInputs}
      ></input>
      <input
        type="number"
        name="entryid"
        placeholder="entryid"
        onChange={handleInputs}
      ></input>
      <input
        type="date"
        name="entryDate"
        placeholder="entryDate"
        onChange={handleInputs}
      ></input>
      <input
        
        name="updateUserId"
        placeholder="updateUserId"
        onChange={handleInputs}
      ></input>
      <input
        type="date"
        name="lastUpdateDate"
        placeholder="lastUpdateDate"
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

      {/* <p>Here: {returnedData}</p> */}
      <p>Employee ID: {returnedData.PLACEMENT_REQUIREMENT_TYPE_ID}</p>
      <p>name: {returnedData.REQUIREMENT_NAME}</p>
      <p>shortname: {returnedData.REQUIREMENT_SHORT_NAME}</p>
      <p>active: {returnedData.ACTIVE}</p>
      <p>deleted: {returnedData.DELETED}</p>
      <p>Entry user id: {returnedData.ENTRY_USER_ID}</p>
      <p>Entry date: {returnedData.ENTRY_DATE}</p>
      <p>Update user id: {returnedData.UPDATE_USER_ID}</p>
      <p>last update date: {returnedData.LAST_UPDATE_DATE}</p>
    </>
  );
}

export default Test;


