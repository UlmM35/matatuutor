const mongoose = require('mongoose')

const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    education: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        required: true,
    },
    accomplishments: [{
        type: String,
        required: true,
    }],
    feedback: [{
        name: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        }
    }],
})

teacherSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Teacher', teacherSchema)