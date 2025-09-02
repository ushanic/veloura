const mongoose = require("mongoose");

const PerfumeSchema = new mongoose.Schema({
    name:String,
    brand:String,
    gender:String,
    price:Number,
    imageUrl:String,
    description:String
});

module.exports = mongoose.model("perfume", PerfumeSchema);