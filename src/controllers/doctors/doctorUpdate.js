const Doctor = require("../../models/doctor");

async function doctorUpdate(request, response) {
  try {
    const doctorInDatabase = await Doctor.findByPk(request.params.id);
    if (!doctorInDatabase) {
      return response
      .status(404)
      .json({ message: "Cadastro do médico não encontrado" });
    }
  //incluir validação se o novo CPF que eu quero cadastrar já existe no banco de dados (para outro paciente)

  doctorInDatabase.full_name = request.body.full_name || doctorInDatabase.full_name;
  doctorInDatabase.gender = request.body.gender || doctorInDatabase.gender;
  doctorInDatabase.birth_date = request.body.birth_date || doctorInDatabase.birth_date;
  doctorInDatabase.cpf = request.body.cpf || doctorInDatabase.cpf;
  doctorInDatabase.contact = request.body.contact || doctorInDatabase.contact;
  doctorInDatabase.education_institution = request.body.education_institution || doctorInDatabase.education_institution;
  doctorInDatabase.crm = request.body.crm || doctorInDatabase.crm;
  doctorInDatabase.specialization = request.body.specialization || doctorInDatabase.specialization;
  doctorInDatabase.status = request.body.status || doctorInDatabase.status;
  doctorInDatabase.total_attendances = request.body.total_attendances || doctorInDatabase.total_attendances;
   
    await doctorInDatabase.save();
    response
    .status(200)
    .json({message: doctorInDatabase});
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Erro ao processar sua solicitação" });
  }
}
module.exports = doctorUpdate;