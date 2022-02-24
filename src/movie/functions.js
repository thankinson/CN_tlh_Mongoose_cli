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

exports.updateMovie = async (title, actor) => {
    try {
        return await Movie.findOneAndUpdate({title}, {actor});
    } catch (error) {
        console.log(error)
    };
    
} ;


// exports.deleteActor = async (actor) =>{
//     try {
//         await Movie.remove({actor})
//     } catch (error) {
//         console.log(error);
//     };
// };