const yup = require("yup");

const validation = yup.object().shape({
  patient_id: yup
  .number()
  .required("ID do paciente é obrigatório.")
  .positive("ID do paciente deve ser positivo.")
  .integer("ID do paciente deve ser um número inteiro."),
  doctor_id: yup
  .number()
  .required("ID do médico é obrigatório.")
  .positive("ID do médico deve ser positivo.")
  .integer("ID do médico deve ser um número inteiro."),
});

function validateAttendance(request, response, next) {
  try {
    validation.validateSync(request.body);
    next();
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
}

module.exports = validateAttendance;
