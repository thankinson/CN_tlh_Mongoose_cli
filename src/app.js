require("./db/connection");
const { default: mongoose } = require("mongoose");
const yargs = require("yargs");
const { addMovie, list, removeMovie, updateMovie } = require("./movie/functions");

const app = async (yargsObj) => {
    try {
        if (yargsObj.add){
            for (i = 0; i < yargsObj.title.length; i++){
                console.log(await addMovie(yargsObj.title[i], yargsObj.actor[i]));
           };  // allows for single or multiple entrys. example : --add  --title="Paul" --actor="simon pegg" --title="the day the earth stood still" --actor="keanu reeves"
        } else if (yargsObj.list) {
            console.log(await list());
            // list function
        } else if (yargsObj.remove){
            for (i = 0; i < yargsObj.title.length; i++){
                await removeMovie(yargsObj.title[i]);
           }; // allows the removel of single or multiple Movies from the database.
        } else if (yargsObj.update) {
            await updateMovie(yargsObj.title, yargsObj.actor);
        } else {    
            console.log("Incorrect Command");
        };
        await mongoose.disconnect();
    } catch (error) {
        console.log(error);
    };
};
app(yargs.argv);