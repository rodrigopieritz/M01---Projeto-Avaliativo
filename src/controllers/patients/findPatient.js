const Patient = require("../../models/patient");

async function findPatient (request, response)  {
    try {
        const patientInDatabase = await Patient.findByPk(request.params.id);
        if (!patientInDatabase) {
          return response
          .status(404)
          .json({ message: "Cadastro de Paciente não encontrado" })}
          response
          .status(200)
          .json({message: patientInDatabase});
    } catch (error) {
        response.status(500).json({ message: 'Não conseguimos processar sua solicitação.' })
    }
}

module.exports = findPatient