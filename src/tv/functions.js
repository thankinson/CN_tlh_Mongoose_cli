const Tv = require("./model");

exports.addTv = async (title, cast, seasons) => {
    try {
        await Tv.create(title, cast, seasons);
    } catch (error) {
        console.log(error);
    };
};

exports.listTv = async () => {
    try {
        return await Tv.find()
    } catch (error) {
        console.log(error);
    }
};

exports.searchTv = async (param, search) => {
    try {
        if (param === "title"){
            return await Tv.find({title: search});
        } else if(param === "actor"){
            return await Tv.find({cast: search});
        };
    } catch (error) {
        console.log(error);
    };
};

exports.removeTv = async (title) => {
    try {
        await Tv.remove({title});
        return `${title} removed`;
    } catch (error) {
        console.log(error);
    };
};

exports.updateTv = async () => {
    try {
        if (param === "title"){
            return await Movie.updateOne({title: oldData}, {title: newData});
        } else if (param === "actor"){
            return await Movie.updateOne({actor: oldData}, {actor: newData}); 
        };
    } catch (error) {
        console.log(error)
    };
        
};

