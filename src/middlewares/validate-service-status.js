const yup = require("yup");

const validation = yup
  .mixed()
  .oneOf(
    ["AGUARDANDO ATENDIMENTO", "EM ATENDIMENTO", "ATENDIDO", "NÃO ATENDIDO"],
    "Status de Atendimento inválido"
  );

function validateServiceStatus(request, response, next) {
  try {
    validation.validateSync(request.body.service_status);
    next();
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
}

module.exports = validateServiceStatus;
