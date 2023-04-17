require("dotenv").config();
const express = require("express");
const connection = require("./src/database");

const patientsRoutes = require("./src/routes/patients");
const doctorsRoutes = require("./src/routes/doctors");
const nursesRoutes = require("./src/routes/nurse");
const attendanceRoutes = require("./src/routes/attendance");

const app = express();

app.use(express.json());

app.use(patientsRoutes)
app.use(doctorsRoutes)
app.use(nursesRoutes)
app.use(attendanceRoutes)

connection.authenticate();
connection.sync({ alter: true });

app.listen(process.env.SERVER_PORT, () => {
  console.log("local server online");
})