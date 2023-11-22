const express = require('express')
const router = express.Router()
const attendanceController = require('../controllers/AttendanceController')

router.post('/create-attendance', attendanceController.createAttendance)

module.exports = router