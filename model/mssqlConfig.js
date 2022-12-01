const config = {
  user: "Siddhesh",
  password: "siddhesh",
  server: "localhost",
  driver: "msnodesqlv8",
  database: "CAPSTONE",
  options: {
    trustServerCertificate: true,
    trustedConnection: true,
    enableArithAbort: true,
  },
  port: 1433,
};

module.exports = config;
