const Doctor = require("../../models/doctor");

async function doctorRegister(request, response) {
  try {
    const data = {
      full_name: request.body.full_name,
      gender: request.body.gender,
      birth_date: request.body.birth_date,
      cpf: request.body.cpf,
      contact: request.body.contact,
      education_institution: request.body.education_institution,
      crm: request.body.crm,
      specialization: request.body.specialization,
      status: request.body.status,  
      total_attendances: request.body.total_attendances,
    };

    const doctorExists = await Doctor.findOne({
      where: { cpf: request.body.cpf },
    });
    if (doctorExists) {
      return response.status(409).json({ message: "Médico já cadastrado" });
    }
    const doctor = await Doctor.create(data);

    response.status(201).json(doctor);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Erro ao processar sua solicitação" });
  }
}
module.exports = doctorRegister;