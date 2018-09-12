const mongoose = require('mongoose');

const CurseSchema = mongoose.Schema({
    title: { type: String, required: true, index: { unique: true }},
    price: { type: Number, required: true},
    summary: String,
    tags: { type: [String], index: true },
    thumbnail: String,
    author: { type: String, required: true},
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Curse', CurseSchema);