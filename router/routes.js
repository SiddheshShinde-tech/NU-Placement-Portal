const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const dbOperation = require("../model/mssqlOperations");
const Employee = require("../model/Employee");
const Company = require("../model/Company");
const companyContact = require("../model/companyContact");

// Mongo DB Connection
// STARTS HERE

// const DB = process.env.DATABASE;

// mongoose
//   .connect(DB)
//   .then(() => {
//     console.log(`MongoDB connected`);
//   })
//   .catch((err) => console.log(err));

// User Schema
const User = require("../model/userSchema");

// JD Schema
const jdUser = require("../model/jdSchema");

// Mongo DB Connection
// ENDS HERE

router.get("/", (req, res) => {
  res.send(`Hello world from router`);
});

router.post("/register", (req, res) => {
  const {
    compName,
    compUrl,
    description,
    mode,
    consent,
    role,
    location,
    stipend,
    date,
    process,
    qualification,
    gradDate,
    positions,
    jd,
    others,
    details,
  } = req.body;

  if (
    !compName ||
    !compUrl ||
    !description ||
    !mode ||
    !consent ||
    !role ||
    !location ||
    !stipend ||
    !date ||
    !process ||
    !qualification ||
    !gradDate ||
    !positions ||
    !jd ||
    !others ||
    !details
  ) {
    return res.status(422).json({ error: "Please fill all the fields" });
  }

  // User.findOne({ email: email }).then((userExist) => {
  //   if (userExist) {
  //     return res.status(422).json({ error: "Already exists" });
  //   }
  // });

  jdUser.findOne({ compName: compName }).then((userExist) => {
    if (userExist) {
      return res.status(422).json({ error: "Already exists" });
    }
  });

  // const user = new User({ name, email });

  const user = new jdUser({
    compName,
    compUrl,
    description,
    mode,
    consent,
    role,
    location,
    stipend,
    date,
    process,
    qualification,
    gradDate,
    positions,
    jd,
    others,
    details,
  });

  user
    .save()
    .then(() => {
      res.status(201).json({ message: "User registered" });
    })
    .catch((err) => res.status(500).json({ error: err }));
});

router.post("/api", async (req, res) => {
  const result = await dbOperation.getEmployees(req.body.name);
  console.log("MY RESULT: ", result);
  res.send(result.recordset);
});

router.post("/create", async (req, res) => {
  console.log("REQ BODY IS: ", req.body);

  let Pam = new Employee(
    req.body.id,
    req.body.name,
    req.body.shortname,
    req.body.active,
    req.body.deleted,
    req.body.entryid,
    req.body.entryDate,
    req.body.updateUserId,
    req.body.lastUpdateDate
  );
  await dbOperation.createCompany(Pam);
  // await dbOperation.createEmployees(req.body);
  // const result = await dbOperation.getEmployees(req.body.name);
  // console.log("MY RESULT 2: ", result);
  // res.send(result.recordset);
});

router.post("/insertcompany", async (req, res) => {
  let Pam = new Company(
    req.body.id,
    req.body.compname,
    req.body.compwebsite,
    req.body.established,
    req.body.turnover,
    req.body.entryDate,
    req.body.address,
    req.body.hiringSince,
    req.body.no_emp
  );
  await dbOperation.createCompany(Pam);

  let Pam2 = new companyContact(
    req.body.id,
    req.body.empName,
    req.body.empDesig,
    req.body.empEmail,
    req.body.empMobile,
    req.body.entryDate
  );
  await dbOperation.createCompanyContact(Pam2);

  // console.log("OUR OBJECT ",Pam);
  // // await dbOperation.createEmployees(req.body);
  // const result = await dbOperation.getEmployees(req.body.name);
  // // console.log("MY RESULT 2: ", result);
  res.send({ data: "data inserted" });
});

router.post("/fetchcompany", async (req, res) => {
  const result = await dbOperation.getCompany();
  res.send(result.recordset);
});

// FETCHING DOCUMENTS HERE
router.get("/browsejd", (req, res) => {
  jdUser.find().then((records) => {
    if (records) {
      res.send(records);
    }
  });
});

module.exports = router;
