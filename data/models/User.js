const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "please enter an email"],
        unique: true,
        lowercase: true,
        validate: [isEmail, "please enter a valid email"]
    },
    password: {
        type: String,
        required: [true, "please enter a password"],
        minlength: [8, "password must be up to eight characters in length"]
    }
});

userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({ email });
    if(user) {
        const result = await bcrypt.compare(password, user.password);
        if(result) {
            return user;
        }
        throw Error("Incorrect password")
    }
    throw Error("Email does not exist")
}

userSchema.post('save', (doc, next) => {
    next();
});

userSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

const User = mongoose.model("user", userSchema);
module.exports = User;