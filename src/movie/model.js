const mongoose = require("mongoose");
const { string, required } = require("yargs");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, // requires that you enter a title
        unique: true,
    },
    actor: {
        type: String, // can use an array here
        default: "not specified",
    },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;