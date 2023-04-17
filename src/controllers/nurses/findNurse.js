const Nurse = require("../../models/nurse");

async function findNurse (request, response)  {
    try {
        const nurseInDatabase = await Nurse.findByPk(request.params.id);
        if (!nurseInDatabase) {
          return response
          .status(404)
          .json({ message: "Cadastro do Enfermeiro não encontrado" })}
          response
          .status(200)
          .json({message: nurseInDatabase});
    } catch (error) {
        response.status(500).json({ message: 'Não conseguimos processar sua solicitação.' })
    }
}

module.exports = findNurse