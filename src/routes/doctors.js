const {Router} = require('express')
const doctorRegister = require('../controllers/doctors/doctorRegister')
const validateDoctorRequest = require('../middlewares/validate-doctor-request')
const doctorUpdate = require('../controllers/doctors/doctorUpdate')
const validateDoctorStatus = require('../middlewares/validate-doctor-status')
const doctorStatusUpdate = require('../controllers/doctors/doctorStatusUpdate')
const doctorsList = require('../controllers/doctors/doctorsList')
const findDoctor = require('../controllers/doctors/findDoctor')
const deleteDoctor = require('../controllers/doctors/deleteDoctor')


const doctorsRoutes = new Router()

doctorsRoutes.post('/api/medicos',validateDoctorRequest, doctorRegister)
doctorsRoutes.put('/api/medicos/:id',validateDoctorRequest, doctorUpdate)
doctorsRoutes.put('/api/medicos/:id/status',validateDoctorStatus, doctorStatusUpdate)
doctorsRoutes.get('/api/medicos',doctorsList)
doctorsRoutes.get('/api/medicos/:id',findDoctor)
doctorsRoutes.delete('/api/medicos/:id',deleteDoctor)

module.exports = doctorsRoutes