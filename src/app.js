require("./db/connection");
const { default: mongoose } = require("mongoose");
const yargs = require("yargs");
const { addMovie, list, removeMovie, updateMovie, searchBy } = require("./movie/functions");


const app = async (yargsObj) => {
    try {
        console.log("hit 1")
        if (yargsObj.add){
            console.log(await addMovie(yargsObj.title, yargsObj.actor));
            // add function
          } else if (yargsObj.list) {
            console.log(await list());
            // list function
        }  else if (yargsObj.remove){
            await removeMovie(yargsObj.title);
                // remove function
        } else if (yargsObj.update) {
            await updateMovie(yargsObj.oldData, yargsObj.newData, yargsObj.param);
            // to update film title param --param="title" --oldData="film1" --newData="film2"
            // to update film actor param --param="actor" --oldData="actor1" --newData="actor2"
        } else if (yargsObj.search) {   
                console.log(await searchBy(yargsObj.param, yargsObj.searchFor));
        } else {
            console.log("Incorrect Command");
        };
        await mongoose.disconnect();
    } catch (error) {
        console.log(error);
    };
};

app(yargs.argv);




            //     for (i = 0; i < yargsObj.title.length; i++){
        //         await removeMovie(yargsObj.title[i]);
        //    }; // allows the removel of single or multiple Movies from the database.