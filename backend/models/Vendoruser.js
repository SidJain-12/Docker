const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const VendorSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    shopname: {
        type: String,
        required: true
    },
    contactname: {
        type: String,
        required: true
    },
    copen: {
        type: String,
        required: true
    },
    cclose: {
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
    }
});


module.exports = Vendor = mongoose.model("Vendors", VendorSchema);
