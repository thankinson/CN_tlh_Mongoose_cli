const Tv = require("./model");


exports.helpTv = () =>{
    return `
    run tvapp: node .\\src\\tvapp.js --options="tasks"
    add tv show: node .\\src\\tvapp.js --tvShow --title="Show Title" --cast="cast member 1" --cast="repeat if adding multiple" --seasons="how many series or seasons have they done"
    show all content: node .\\src\\tvapp.js --listTv
    search db: node .\\src\\tvapp.js --tvsearch --param="title/cast" --search="search for show or cast ember"
    remove from db: node .\\src\\tvapp.js --deleteTv --title="removes show and all headings attached"
    update content: node .\\src\\tvapp.js --tvUpdate --param="title/cast" --search="title or cast member" --update="what you updateing"

`
}
exports.addTv = async (title, cast, seasons) => {
    try {
        await Tv.create({title, cast, seasons});
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
        } else if(param === "cast"){
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

exports.updateTv = async (param, search, update) => {
    try {
        if (param === "title"){
            return await Tv.updateOne({title: search}, {title: update});
        } else if (param === "cast"){
            return await Tv.updateOne({cast: search}, {cast: update}); 
        };
    } catch (error) {
        console.log(error)
    };
        
};

