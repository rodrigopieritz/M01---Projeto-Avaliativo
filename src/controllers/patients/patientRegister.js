const Patient = require("../../models/patient");

async function patientRegister(request, response) {
  try {
    const data = {
      full_name: request.body.full_name,
      gender: request.body.gender,
      birth_date: request.body.birth_date,
      cpf: request.body.cpf,
      contact: request.body.contact,
      emergency_contact: request.body.emergency_contact,
      alergies_list: request.body.alergies_list,
      specific_cares: request.body.specific_cares,
      health_insurance: request.body.health_insurance,
      service_status: request.body.service_status,
      total_attendances: request.body.total_attendances,
    };

    const patientExists = await Patient.findOne({
      where: { cpf: request.body.cpf },
    });
    if (patientExists) {
      return response.status(409).json({ message: "Paciente já cadastrado" });
    }
    const patient = await Patient.create(data);

    response.status(201).json(patient);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Erro ao processar sua solicitação" });
  }
}
module.exports = patientRegister;
