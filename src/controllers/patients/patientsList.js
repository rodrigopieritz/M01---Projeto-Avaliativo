const Patient = require("../../models/patient");

async function patientList(request, response) {
  try {
    const data = request.query;

    if (data.service_status) {
      if (
        ![
          "AGUARDANDO ATENDIMENTO",
          "EM ATENDIMENTO",
          "ATENDIDO",
          "NÃO ATENDIDO",
        ].includes(data.service_status)
      ) {
        return response
        .status(400)
        .json({
          message:
            "O estado do serviço deve ser AGUARDANDO ATENDIMENTO, EM ATENDIMENTO, ATENDIDO ou NÃO ATENDIDO",
        });
      }

      const patient = await Patient.findAll({
        where: {
          service_status: data.service_status,
        },
      });
      response.json(patient);
    } else {
      const patient = await Patient.findAll();
      response.json(patient);
    }
  } catch (error) {
    console.log(error);
    return response
      .status(500)
      .json({ message: "Não possivel processar a solicitacao" });
  }
}

module.exports = patientList;
