const Nurse = require("../../models/nurse");

async function deleteNurse(request, response) {
  try {
    const nurseInDatabase = await Nurse.findByPk(request.params.id);
    if (!nurseInDatabase) {
      return response
        .status(404)
        .json({ message: "Cadastro de Enfermeiro não encontrado" });
    }

    await Nurse.destroy({
      where: {
        id: request.params.id,
      },
    });
    response.status(204).send();
  } catch (error) {
    response
      .status(500)
      .json({ message: "Não conseguimos processar sua solicitação." });
  }
}

module.exports = deleteNurse;