const Patient = require("../../models/patient");

async function patientServiceUpdate(request, response) {
    try {
        const patientInDatabase = await Patient.findByPk(request.params.id);
        if (!patientInDatabase) {
          return response
          .status(404)
          .json({ message: "Cadastro de Paciente não encontrado" });
        }
        patientInDatabase.service_status = request.body.service_status || patientInDatabase.service_status;
               
        await patientInDatabase.save();
        response
        .status(200)
        .json({message: patientInDatabase});
      } catch (error) {
        console.log(error);
        response.status(500).json({ message: "Erro ao processar sua solicitação" });
      }
}
module.exports = patientServiceUpdate;
