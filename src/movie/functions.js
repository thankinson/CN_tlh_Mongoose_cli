const Movie = require("./model");

exports.addMovie = async (title, actor) =>{
    try {
        await Movie.create({title, actor}); // dry version
        // await Movie.create({title: title, actor: actor}); // non dry version
        return "Success"
    } catch (error) {
        console.log(error);
    };
};

exports.list = async () => {
    try {
        return await Movie.find({});
    } catch (error) {
        console.log(error);        
    };
};

exports.removeMovie = async (title) => {
    try {
        await Movie.remove({title});
        console.log(`${title} removed`)
    } catch (error) {
        console.log(error);
    };
};

exports.updateMovie = async (oldData, newData, param) => {
    try {
        // return await Movie.findOneAndUpdate({old}, {anew});
        if (param === "title"){
        return await Movie.updateOne({title: oldData}, {title: newData});
        } else if (param === "actor"){
        return await Movie.updateOne({actor: oldData}, {actor: newData}); 
        }
    } catch (error) {
        console.log(error)
    };
    
} ;

exports.searchBy = async (param, searchFor) =>{
    try {
        // return await Movie.find({actor}); // this works.....
        if (param === "actor"){ /// this dose not
            return await Movie.find({actor: searchFor});
        } else if (param === "title"){
            return await Movie.find({title: searchFor})
        }   
    } catch (error) {
        console.log(error);        
    }
}

// exports.deleteActor = async (actor) =>{
//     try {
//         await Movie.remove({actor})
//     } catch (error) {
//         console.log(error);
//     };
// };