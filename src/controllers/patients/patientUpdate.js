const Patient = require("../../models/patient");

async function patientUpdate(request, response) {
  try {
    const patientInDatabase = await Patient.findByPk(request.params.id);
    if (!patientInDatabase) {
      return response
      .status(404)
      .json({ message: "Cadastro de Paciente não encontrado" });
    }
    
    patientInDatabase.full_name = request.body.full_name || patientInDatabase.full_name;
    patientInDatabase.gender = request.body.gender || patientInDatabase.gender;
    patientInDatabase.birth_date = request.body.birth_date || patientInDatabase.birth_date;
    patientInDatabase.cpf = request.body.cpf || patientInDatabase.cpf;
    patientInDatabase.contact = request.body.contact || patientInDatabase.contact;
    patientInDatabase.emergency_contact = request.body.emergency_contact || patientInDatabase.emergency_contact;
    patientInDatabase.alergies_list = request.body.alergies_list || patientInDatabase.alergies_list;
    patientInDatabase.specific_cares = request.body.specific_cares || patientInDatabase.specific_cares;
    patientInDatabase.health_insurance = request.body.health_insurance || patientInDatabase.health_insurance;
   
    await patientInDatabase.save();
    response
    .status(200)
    .json({message: patientInDatabase});
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Erro ao processar sua solicitação" });
  }
}
module.exports = patientUpdate;
