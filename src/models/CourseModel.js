const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        description: { type: String, required: true },
        image: { type: String },
        type: { type: String },
        level: { type: String },
        price: { type: Number },
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