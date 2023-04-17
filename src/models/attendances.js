const Sequelize = require("sequelize");
const connection = require("../database");
const Patient = require("./patient");
const Doctor = require("./doctor");

const Attendance = connection.define("attendance", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  patient_id: {
    type: Sequelize.INTEGER,
  },
  doctor_id: {
    type: Sequelize.INTEGER,
  },
});

Attendance.belongsTo(Patient);
Attendance.belongsTo(Doctor);

module.exports = Attendance;