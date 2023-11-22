const AttendanceService = require('../services/AttendanceService');

const createAttendance = async (req, res) => {
    try {
        const { studentId, studentName, date, courseId, status } = req.body
        if (!studentId || !studentName || !courseId || !status) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }

        const response = await AttendanceService.createAttendance(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
};

module.exports = { 
    createAttendance,
}