const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    contactname: {
        type: String,
        required: true
    },
    batchname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        required: false
    },

    wallet :{
        type:Number,
        required: false,
        default:0
    }
});

module.exports = User = mongoose.model("Users", UserSchema);
