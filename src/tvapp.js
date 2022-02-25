require("./db/connection");
const { default: mongoose } = require("mongoose");
const yargs = require("yargs");
const { addTv, listTv, searchTv, removeTv, updateTv, helpTv } = require("./tv/functions");

const tvDb = async (yargsObj) =>{
    try{
        if (yargsObj.tvHelp){
            console.log(helpTv())
        }else if (yargsObj.tvShow){
            await addTv(yargsObj.title, yargsObj.cast, yargsObj.seasons);
        } else if (yargsObj.tvList){
            console.log("hit list")
            console.log(await listTv());
           // returns full db list of shows
        } else if (yargsObj.tvSearch){
            console.log("hit search")
            console.log(await searchTv(yargsObj.param, yargsObj.search));
        } else if (yargsObj.deleteTv){
            console.log("hit delete")
            console.log(await removeTv(yargsObj.title));
        } else if (yargsObj.tvUpdate){
            console.log("hit update")
            console.log(await updateTv(yargsObj.param, yargsObj.search, yargsObj.update));
        } else {
            console.log("Incorrect tv command")
        }
    } catch (error) {
        console.log(error)
    }
    await mongoose.disconnect();
};

tvDb(yargs.argv)



            //     for (i = 0; i < yargsObj.title.length; i++){
        //         await removeMovie(yargsObj.title[i]);
        //    }; // allows the removel of single or multiple Movies from the database.