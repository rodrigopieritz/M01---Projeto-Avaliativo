const yup = require("yup");

const validation = yup
  .mixed()
  .oneOf(
    ["ATIVO", "INATIVO"],
    "Estado do médico é inválido"
  );

function validateDoctorStatus(request, response, next) {
  try {
    validation.validateSync(request.body.status);
    next();
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
}

module.exports = validateDoctorStatus;