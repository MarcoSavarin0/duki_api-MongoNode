const mongoose = require('mongoose');

const songSchema = new mongoose.Schema(

    {
        title: String,
        artists: String,
        genre : String,
        publication_date: String,
        url: String
    }
)


module.exports = mongoose.model('song', songSchema)