const yup = require("yup");

const validation = yup.object().shape({
  full_name: yup
    .string("Nome deve ser uma string")
    .required("Nome é obrigatório"),
  cpf: yup
    .string("CPF deve ser um string")
    .min(11, "CPF inválido")
    .max(11, "CPF inválido")
    .required("CPF é obrigatório"),
  birth_date: yup
    .date("Data de nascimento deve estar em formato de data 1990-02-25")
    .required("Data de nascimento é obrigatória"),
  cofen: yup.string("COFEN deve ser um string").required("COFEN é obrigatório"),
  education_institution: yup
    .string("Instituição de Formação deve ser um string")
    .required("Instituição de Formação é obrigatório"),
});

const enumValidationGender = yup.mixed().oneOf(["MALE", "FEMALE"],"O Gênero é inválido");

function validateNurseRequest(request, response, next) {
  try {
    validation.validateSync(request.body);
    enumValidationGender.validateSync(request.body.gender);
    next();
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
}

module.exports = validateNurseRequest;