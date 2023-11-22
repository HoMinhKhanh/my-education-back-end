const mongoose = require('mongoose');

const newSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        content: { type: String, required: true },
        image: { type: String },
        like: { type: String },
        author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    },
    {
        timestamps: true,
    }
);

const New = mongoose.model('New', newSchema);
module.exports = New;