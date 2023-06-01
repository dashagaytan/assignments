// holds Database Schema

const mongoose = require("mongoose")
const Schema = mongoose.Schema

const inventorySchema = new Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: Number
})

module.exports = mongoose.model("Inventory", inventorySchema)