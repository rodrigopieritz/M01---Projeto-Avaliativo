const Attendance = require("../../models/attendances");
const Doctor = require("../../models/doctor");
const Patient = require("../../models/patient");

async function attendenceUpdate(request, response) {
  try {
    const data = {
      doctor_id: request.body.doctor_id,
      patient_id: request.body.patient_id,
    };
    const doctorInDatabase = await Doctor.findByPk(data.doctor_id);
    const patientInDatabase = await Patient.findByPk(data.patient_id);
    if (!doctorInDatabase || !patientInDatabase) {
      return response
        .status(404)
        .json({ message: "Cadastro do Médico e/ou Paciente não encontrado" });
    }

    const attendance = await Attendance.create(data);

    doctorInDatabase.total_attendances = doctorInDatabase.total_attendances + 1;
    patientInDatabase.total_attendances = patientInDatabase.total_attendances + 1;
    patientInDatabase.service_status = "ATENDIDO";

    await doctorInDatabase.save();
    await patientInDatabase.save();

    response.status(200).json({ message: attendance });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Erro ao processar sua solicitação" });
  }
}
module.exports = attendenceUpdate;
