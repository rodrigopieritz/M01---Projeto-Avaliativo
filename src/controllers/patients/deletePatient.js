const Patient = require("../../models/patient");

async function deletePatient(request, response) {
  try {
    const patientInDatabase = await Patient.findByPk(request.params.id);
    if (!patientInDatabase) {
      return response
        .status(404)
        .json({ message: "Cadastro de Paciente não encontrado" });
    }

    await Patient.destroy({
      where: {
        id: request.params.id,
      },
    });
    response.status(204);
  } catch (error) {
    response
      .status(500)
      .json({ message: "Não conseguimos processar sua solicitação." });
  }
}

module.exports = deletePatient;
