const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        description: { type: String, required: true },
        videoId: { type: String, required: true },
        course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    },
    {
        timestamps: true,
    }
);

const Lesson = mongoose.model('Lesson', lessonSchema);
module.exports = Lesson;