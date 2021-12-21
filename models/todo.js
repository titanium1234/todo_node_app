const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    deadline: {
        type: Date,
        required: [true, 'Deadline is required']
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

const todo = mongoose.model('todo', todoSchema);
module.exports = todo;
