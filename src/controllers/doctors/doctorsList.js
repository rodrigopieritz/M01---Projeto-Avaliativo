const Doctor = require("../../models/doctor");

async function doctorsList(request, response) {
  try {
    const data = request.query;

    if (data.status) {
      if (
        ![
          "ATIVO",
          "INATIVO",
        ].includes(data.status)
      ) {
        return response.json({
          message:
            "O estado do médico deve ser ATIVO ou INATIVO",
        });
      }

      const doctor = await Doctor.findAll({
        where: {
          status: data.status,
        },
      });
      response.json(doctor);
    } else {
      const doctor = await Doctor.findAll();
      response.json(doctor);
    }
  } catch (error) {
    console.log(error);
    return response
      .status(500)
      .json({ message: "Não possivel processar a solicitacao" });
  }
}

module.exports = doctorsList;