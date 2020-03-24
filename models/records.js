const mongoose = require('mongoose');


const recordSchema = new mongoose.Schema({
    artist:String,
    album:String,
    title:String,

})

const recordModel = mongoose.model('records',recordSchema);
module.exports = recordModel