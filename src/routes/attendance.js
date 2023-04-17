const {Router} = require('express')
const validateAttendance = require('../middlewares/validate-attendance')
const attendenceUpdate = require('../controllers/attendance/attendanceUpdate')

const attendanceRoutes = new Router()

attendanceRoutes.post('/api/atendimentos',validateAttendance, attendenceUpdate)

module.exports = attendanceRoutes