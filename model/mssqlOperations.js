const config = require("./mssqlConfig");
const sql = require("mssql/msnodesqlv8");

// READ OPERATION

const getEmployees = async (name) => {
  try {
    let pool = await sql.connect(config);
    let employees = await pool
      .request()
      .query("SELECT * FROM CORE_PLACEMENT_REQUIREMENT_TYPE$");
    let employees2 = await pool
      .request()
      .query(
        `SELECT * FROM CORE_PLACEMENT_REQUIREMENT_TYPE$ WHERE REQUIREMENT_NAME='${name}'`
      );
    // console.log(employees);
    return employees2;
  } catch (error) {
    console.log("CATCHED ERROR IS ", error);
  }
};

const getCompany = async (Company) => {
  try {
    let pool = await sql.connect(config);
    let employees = await pool.request().query(`SELECT * FROM PLA_COMPANY$`);
    // let employees2 = await pool
    //   .request()
    //   .query(
    //     `SELECT * FROM CORE_PLACEMENT_REQUIREMENT_TYPE$ WHERE REQUIREMENT_NAME='${name}'`
    //   );
    console.log("INSIDE ", employees);
    return employees;
  } catch (error) {
    console.log("CATCHED ERROR IS ", error);
  }
};

// WRITE OPERATION

const createEmployees = async (Employee) => {
  try {
    // console.log("EMPLOYEE DATA ",Employee)
    let pool = await sql.connect(config);
    let employees = await pool
      .request()
      .query(
        `INSERT INTO CORE_PLACEMENT_REQUIREMENT_TYPE$ VALUES(${Employee.PLACEMENT_REQUIREMENT_TYPE_ID},'${Employee.REQUIREMENT_NAME}','${Employee.REQUIREMENT_SHORT_NAME}',${Employee.ACTIVE},${Employee.DELETED},${Employee.ENTRY_USER_ID},${Employee.ENTRY_DATE},'${Employee.UPDATE_USER_ID}',${Employee.LAST_UPDATE_DATE})`
      );

    return employees;
  } catch (error) {
    console.log("CATCHED ERROR IS ", error);
  }
};

const createCompany = async (Company) => {
  try {
    // console.log("EMPLOYEE DATA ",Employee)
    let pool = await sql.connect(config);
    let employees = await pool
      .request()
      .query(
        `INSERT INTO PLA_COMPANY$ VALUES(${Company.PLA_COMPANY_ID},2,'${Company.COMPANY_NAME}','${Company.COMPANY_WEBSITE}','${Company.ESTABLISHED_IN}',${Company.TURNOVER},1,0,1,'${Company.ENTRY_DATE}',null,'${Company.ENTRY_DATE}','${Company.COMPANY_ADDRESS}','${Company.HIRING_SINCE}',${Company.NO_OF_EMPLOYEES})`
      );

    return employees;
  } catch (error) {
    console.log("CATCHED ERROR IS ", error);
  }
};

const createCompanyContact = async (Contact) => {
  try {
    // console.log("EMPLOYEE DATA ",Employee)
    let pool = await sql.connect(config);
    let employees = await pool
      .request()
      .query(
        `INSERT INTO PLA_COMPANY_DET$ VALUES(${Contact.PLA_COMPANY_ID},${Contact.PLA_COMPANY_ID},'${Contact.EMP_NAME}','${Contact.EMP_DESIGNATION}','${Contact.EMP_EMAIL_ID}',${Contact.EMP_MOBILE_NUMBER},null,1,1,0,1,'${Contact.ENTRY_DATE}',null,'${Contact.ENTRY_DATE}')`
      );

    return employees;
  } catch (error) {
    console.log("CATCHED ERROR IS ", error);
  }
};

module.exports = {
  getEmployees,
  createEmployees,
  createCompany,
  createCompanyContact,
  getCompany,
};
