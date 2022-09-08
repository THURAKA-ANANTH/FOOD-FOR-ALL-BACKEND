const mongoose = require("mongoose")
const Schema = mongoose.Schema

const RequestFundSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    contactNumber: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    zipCode: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    TelephoneNumber: {
        type: Number,
        required: true
    },
    requestTitle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    document: {
        type: String,
        required: true
    },

})

const RequestFund = moongoose.model("requestFund", RequestFundSchema)
module.exports = RequestFund;