const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        description: { type: String },
        videoId: { type: String, required: true },
        courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
        rating: { type: Number, default: 0 },
    },
    {
        timestamps: true,
    }
);

const Lesson = mongoose.model('Lesson', lessonSchema);
module.exports = Lesson;