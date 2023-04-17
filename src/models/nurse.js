const connection = require("../database");
const Sequelize = require("sequelize");

const Nurse = connection.define("nurse", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  full_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  gender: {
    type: Sequelize.ENUM("MALE", "FEMALE"),
    allowNull: false,
  },
  birth_date: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  cpf: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  contact: {
    type: Sequelize.STRING,
  },
  education_institution: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cofen: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});
module.exports = Nurse;
