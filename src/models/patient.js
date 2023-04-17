const connection = require("../database");
const Sequelize = require("sequelize");

const Patient = connection.define("patient", {
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
    type: Sequelize.ENUM("MALE","FEMALE"),
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
  emergency_contact: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  alergies_list: {
    type: Sequelize.TEXT
  },
  specific_cares:{
    type: Sequelize.TEXT
  },
  health_insurance:{
    type: Sequelize.STRING
  },
  service_status:{
    type: Sequelize.ENUM("AGUARDANDO ATENDIMENTO", "EM ATENDIMENTO", "ATENDIDO", "NÃO ATENDIDO")
  },
  total_attendances:{
    type: Sequelize.INTEGER,
    defaultValue: 0
  }

});

module.exports = Patient
