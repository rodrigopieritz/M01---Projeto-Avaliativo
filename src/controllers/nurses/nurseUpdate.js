const Nurse = require("../../models/nurse");

async function nurseUpdate(request, response) {
  try {
    const nurseInDatabase = await Nurse.findByPk(request.params.id);
    if (!nurseInDatabase) {
      return response
      .status(404)
      .json({ message: "Cadastro de enfermeiro não encontrado" });
    }
    nurseInDatabase.full_name = request.body.full_name || nurseInDatabase.full_name;
    nurseInDatabase.gender = request.body.gender || nurseInDatabase.gender;
    nurseInDatabase.birth_date = request.body.birth_date || nurseInDatabase.birth_date;
    nurseInDatabase.cpf = request.body.cpf || nurseInDatabase.cpf;
    nurseInDatabase.contact = request.body.contact || nurseInDatabase.contact;
    nurseInDatabase.education_institution = request.body.education_institution || nurseInDatabase.education_institution;
    nurseInDatabase.cofen = request.body.cofen || nurseInDatabase.cofen;

    await nurseInDatabase.save();
    response
    .status(200)
    .json({message: nurseInDatabase});
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Erro ao processar sua solicitação" });
  }
}
module.exports = nurseUpdate;