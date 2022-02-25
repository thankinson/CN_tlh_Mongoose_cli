const mongoose = require("mongoose");
const { string, required } = require("yargs");

const tvSchema = mongoose.Schema({
    title: {
        type: String,
        required: true, 
        unique: true,
    },
    cast: {
        type: [],
    },
    seasons: {
        type: Number,
    },
});

const Tv = mongoose.model("Tv", tvSchema);
module.exports = Tv;