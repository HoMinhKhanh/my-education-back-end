const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: { type: String },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role: { type: String, required: true, default: 'student' },
        phone: { type: Number },
        avatar: { type: String },
        access_token: { type: String },
        refresh_token: { type: String },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model('User', userSchema);
module.exports = User;