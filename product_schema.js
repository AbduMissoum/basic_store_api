const mongoose = require("mongoose")
const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        default: false

    },
    rating: {
        type: Number,
        required: true
    }



}, { timestamps: true });
const Product = mongoose.model('product', schema)
module.exports = Product