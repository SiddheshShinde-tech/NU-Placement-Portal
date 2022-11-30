const dotenv = require("dotenv").config();
const express = require("express");
const colors = require("colors");
const cors = require("cors");
const req = require("express/lib/request");
const res = require("express/lib/response");
const mongoose = require("mongoose");

const dbOperation = require("./model/mssqlOperations");
const Employee = require("./model/Employee");

const app = express();

const PORT = process.env.SERVER_PORT;

// MICROSOFT SQL CONNECTION
// STARTS HERE

// let Pam = new Employee(800, 'New', 'CPG/Retail', 1, 0, 1, '2017-07-01', '1', '2017-07-02');

// dbOperation.createEmployees(Pam);

// dbOperation.getEmployees().then((res) => {
//   console.log(res.recordset);
// });






// MICROSOFT SQL CONNECTION
// ENDS HERE

// Mongo DB Connection
// STARTS HERE

// const DB = process.env.DATABASE;

// mongoose
//   .connect(DB)
//   .then(() => {
//     console.log(`MongoDB connected`);
//   })
//   .catch((err) => console.log(err));

// Mongo DB Connection
// ENDS HERE







// MIDDLEWARES

app.use(cors());
app.use(express.json({ extended: false }));

// Linking router files to make our route easy
app.use(require("./router/routes"));

// LISTEN REQUEST

app.listen(PORT, function () {
  console.log(`Server started on port ${PORT}`.red.bold);
});
