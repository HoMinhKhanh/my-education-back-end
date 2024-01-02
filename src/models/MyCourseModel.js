const mongoose = require('mongoose');

const myCourseSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    },
    {
        timestamps: true,
    }
);

const MyCourse = mongoose.model('MyCourse', myCourseSchema);
module.exports = MyCourse;