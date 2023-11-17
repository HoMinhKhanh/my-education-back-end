const Attendance = require('../models/AttendanceModel');

const createAttendance = (newAttendance) => {
    return new Promise(async (resolve, reject) => {
        const { studentId, studentName, date, courseId, status } = newAttendance
        try {
            const createdAttendance = await Attendance.create({
                studentId, 
                studentName, 
                date, 
                courseId, 
                status,
            })
            if(createdAttendance) {
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: createdAttendance
                })
            }
        } catch (e) {
            reject(e);
        }
    })
};

module.exports = { 
    createAttendance,
}