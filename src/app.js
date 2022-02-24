require("./db/connection");
const { default: mongoose } = require("mongoose");
const yargs = require("yargs");
const { addMovie, list, deleteMovie, updateMovie } = require("./movie/functions");

const app = async (yargsObj) => {
    try {
        if (yargsObj.add){
            console.log(await addMovie(yargsObj.title, yargsObj.actor))
            //add function
        } else if (yargsObj.list) {
            console.log(await list());
            // list function
        } else if (yargsObj.delete){
            await deleteMovie(yargsObj.title)
            // removes by title
        } else if (yargsObj.update) {
            await updateMovie(yargsObj.title, yargsObj.actor)
            // updates actor
        } else {    
            console.log("Incorrect Command");
        }
        await mongoose.disconnect();
    } catch (error) {
        console.log(error);
    };
};

app(yargs.argv);