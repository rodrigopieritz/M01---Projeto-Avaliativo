const {Router} = require('express')
const nurseRegister = require('../controllers/nurses/nurseRegister')
const validateNurseRequest = require('../middlewares/validate-nurse-request')
const nurseUpdate = require('../controllers/nurses/nurseUpdate')
const nursesList = require('../controllers/nurses/nursesList')
const findNurse = require('../controllers/nurses/findNurse')
const deleteNurse = require('../controllers/nurses/deleteNurse')


const nursesRoutes = new Router()

nursesRoutes.post('/api/enfermeiros', validateNurseRequest, nurseRegister)
nursesRoutes.put('/api/enfermeiros/:id',validateNurseRequest, nurseUpdate)
nursesRoutes.get('/api/enfermeiros',nursesList)
nursesRoutes.get('/api/enfermeiros/:id',findNurse)
nursesRoutes.delete('/api/enfermeiros/:id',deleteNurse)

module.exports = nursesRoutes