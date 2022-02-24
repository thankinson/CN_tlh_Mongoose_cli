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

exports.deleteMovie = async (title) => {
    try {
        await Movie.remove({title});
    } catch (error) {
        console.log(error);
    };
};

exports.updateMovie = async (title, actor) => {
    return await Movie.findOneAndUpdate({title}, {actor});
} ;


// exports.deleteActor = async (actor) =>{
//     try {
//         await Movie.remove({actor})
//     } catch (error) {
//         console.log(error);
//     };
// };