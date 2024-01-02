const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    src: { type: String },
});

const userSchema = new mongoose.Schema(
    {
        name: { type: String, default: 'student' },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role: { type: String, required: true, default: 'student' },
        phone: { type: Number },
        avatar: { type: String },
        images: [imageSchema],
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model('User', userSchema);
module.exports = User;