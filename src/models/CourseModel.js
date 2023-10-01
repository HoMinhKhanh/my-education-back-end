const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        description: { type: String, required: true },
        image: { type: String, required: true },
        type: { type: String, required: true },
        level: { type: String, required: true },
        price: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
);

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;