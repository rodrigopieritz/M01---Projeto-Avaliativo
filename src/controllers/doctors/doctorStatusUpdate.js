const Doctor = require("../../models/doctor");

async function doctorStatusUpdate(request, response) {
    try {
        const doctorInDatabase = await Doctor.findByPk(request.params.id);
        if (!doctorInDatabase) {
          return response
          .status(404)
          .json({ message: "Cadastro do Médico não encontrado" });
        }
        doctorInDatabase.status = request.body.status || doctorInDatabase.status;
               
        await doctorInDatabase.save();
        response
        .status(200)
        .json({message: doctorInDatabase});
      } catch (error) {
        console.log(error);
        response.status(500).json({ message: "Erro ao processar sua solicitação" });
      }
}
module.exports = doctorStatusUpdate;