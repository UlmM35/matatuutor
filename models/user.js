const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: 3
    },
    passwordHash: String,
    email: {
        type: String,
        required: true,
        unique: true,
    },
    score: {
        type: Number,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    visits: {
        type: Number,
    },
    bookingAmount: {
        type: Number,
    },
    bookings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Booking'
        }
    ]
})

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.passwordHash
    }
})

module.exports = mongoose.model('User', userSchema)