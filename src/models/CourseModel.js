const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        description: { type: String, required: true },
        image: { type: String },
        type: { type: String },
        level: { type: String },
        price: { type: Number },
        member: { type: Number , default: 0 },
        instructorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        listLessons: [
            { 
                lessonId: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' },
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;