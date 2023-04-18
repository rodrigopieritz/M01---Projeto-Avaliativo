const yup = require("yup");

const validation = yup.object().shape({
  full_name: yup
    .string("Nome deve ser uma string")
    .required("Nome é obrigatório"),
  cpf: yup
    .string("O CPF deve ser um string")
    .min(11, "CPF inválido")
    .max(11, "CPF inválido")
    .required("CPF é obrigatório"),
  birth_date: yup
    .date("Data de nascimento deve estar em formato de data 1990-02-25")
    .required("Data de nascimento é obrigatória"),
  emergency_contact: yup
    .string("O Contato de Emergência deve ser um string")
    .required("Contato de Emergência é obrigatório"),
});
const enumValidationGender = yup
  .mixed()
  .oneOf(["MASCULINO", "FEMININO"], "O Gênero deve ser MASCULINO ou FEMININO");

function validatePatientRequest(request, response, next) {
  try {
    validation.validateSync(request.body);
    enumValidationGender.validateSync(request.body.gender);
    next();
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
}

module.exports = validatePatientRequest;
