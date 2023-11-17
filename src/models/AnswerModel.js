const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema(
    {
        title: { type: String },
        assignmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Assignment', required: true },
        studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
        content: { type: String, required: true },
        score: { type: Number },
    },
    {
        timestamps: true,
    }
);

const Answer = mongoose.model('Answer', answerSchema);
module.exports = Answer;