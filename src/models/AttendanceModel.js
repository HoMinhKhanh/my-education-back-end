const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema(
    {
        studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        studentName: { type: String, required: true },
        date: { type: Date, default: Date.now, required: true },
        courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
        status: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

const Attendance = mongoose.model('Attendance', attendanceSchema);
module.exports = Attendance;