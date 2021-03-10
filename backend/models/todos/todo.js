const mongoose = require('mongoose');

const Todo = mongoose.model('Todo', {
    text : {
        type: String,
        trim: true,
        required: true
    }
});

const 

module.exports = {Todo};
