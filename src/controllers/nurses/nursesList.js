const Nurse = require("../../models/nurse");

async function nursesList(request, response) {
  try {
    const nurse = await Nurse.findAll();
    response.json(nurse);
  } catch (error) {
    console.log(error);
    return response
      .status(500)
      .json({ message: "Não possivel processar a solicitacao" });
  }
}

module.exports = nursesList;
