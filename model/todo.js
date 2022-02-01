const mongoose = require('mongoose');
let todoSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    },
    updatedAt: {
        type: Date,
        default: Date.now,
        required: true
    },
    category: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Todo", todoSchema);