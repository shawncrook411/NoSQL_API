const mongoose = require('mongoose')

const isEmail = function(email) {
    let regex = /^.+@(?:[\w-]+\.)+\w+$/
    return regex.test(email)
}

const userSchema = new mongoose.Schema({
    username: { type: String, 
        required: true,
        unique: true,
        trim: true
    },
    email: { type: String,
        required: true,
        unique: true,
        validate: [ isEmail, 'Invalid Email' ]
    },
    friends: Array,
    thoughts: Array,
})

userSchema.virtual('friendCount').get(function () {
    return this.friends.length    
})

const User = mongoose.model('User', userSchema)

module.exports = User