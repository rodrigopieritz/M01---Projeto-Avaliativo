const Sequelize = require("sequelize");
const connection = require("../database");

const Doctor = connection.define("doctor", {
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
  crm: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  specialization: {
    type: Sequelize.ENUM("CLÍNICO GERAL", "ANESTESISTA", "DERMATOLOGISTA", "GINECOLOGISTA", "NEUROLOGISTA", "PEDIATRIA", "PSIQUIATRIA", "ORTOPEDIA"),
    allowNull: false,
  },
  status: {
    type: Sequelize.ENUM("ATIVO","INATIVO"),
    defaultValue: "ATIVO"
  },
  total_attendances: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
});

module.exports = Doctor;
