const Doctor = require("../../models/doctor");

async function findDoctor (request, response)  {
    try {
        const doctorInDatabase = await Doctor.findByPk(request.params.id);
        if (!doctorInDatabase) {
          return response
          .status(404)
          .json({ message: "Cadastro do Médico não encontrado" })}
          response
          .status(200)
          .json({message: doctorInDatabase});
    } catch (error) {
        response.status(500).json({ message: 'Não conseguimos processar sua solicitação.' })
    }
}

module.exports = findDoctor