const Nurse = require("../../models/nurse");

async function nurseRegister(request, response) {
  try {
    const data = {
      full_name: request.body.full_name,
      gender: request.body.gender,
      birth_date: request.body.birth_date,
      cpf: request.body.cpf,
      contact: request.body.contact,
      education_institution: request.body.education_institution,
      cofen: request.body.cofen
    };

    const nurseExists = await Nurse.findOne({
      where: { cpf: request.body.cpf },
    });
    if (nurseExists) {
      return response.status(409).json({ message: "Enfermeiro já cadastrado" });
    }
    const nurse = await Nurse.create(data);

    response.status(201).json(nurse);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Erro ao processar sua solicitação" });
  }
}
module.exports = nurseRegister;
