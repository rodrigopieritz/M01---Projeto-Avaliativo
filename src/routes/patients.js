const {Router} = require('express')
const patientRegister = require('../controllers/patients/patientRegister')
const patientUpdate = require('../controllers/patients/patientUpdate')
const validatePatientRequest = require('../middlewares/validate-patient-request')
const patientServiceUpdate = require('../controllers/patients/patientServiceUpdate')
const validateServiceStatus = require('../middlewares/validate-service-status')
const findPatient = require('../controllers/patients/findPatient')
const deletePatient = require('../controllers/patients/deletePatient')
const patientsList = require('../controllers/patients/patientsList')

const patientsRoutes = new Router()

patientsRoutes.post('/api/pacientes', validatePatientRequest, patientRegister)
patientsRoutes.put('/api/pacientes/:id',validatePatientRequest, patientUpdate)
patientsRoutes.put('/api/pacientes/:id/status',validateServiceStatus,patientServiceUpdate)
patientsRoutes.get('/api/pacientes',patientsList)
patientsRoutes.get('/api/pacientes/:id',findPatient)
patientsRoutes.delete('/api/pacientes/:id',deletePatient)

module.exports = patientsRoutes