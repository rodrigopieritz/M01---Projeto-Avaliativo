const Doctor = require("../../models/doctor");

async function deleteDoctor(request, response) {
  try {
    const doctorInDatabase = await Doctor.findByPk(request.params.id);
    if (!doctorInDatabase) {
      return response
        .status(404)
        .json({ message: "Cadastro de Médico não encontrado" });
    }

    await Doctor.destroy({
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

module.exports = deleteDoctor;