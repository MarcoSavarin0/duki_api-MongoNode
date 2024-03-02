const Song = require('../models/song.model');

module.exports = {
    getAllSong: async function(req, res) {
        try {
            const songs = await Song.find();
            if (songs.length === 0) {
                return res.status(204).json([]);
            }
            res.status(200).json(songs);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    addNewSong: async function(req, res) {
        const { title, artists, genre, publication_date,url } = req?.body;
        if (!title || !artists || !genre || !publication_date || !url) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios' });
        }
        const song = new Song({
            title,
            artists,
            genre,
            publication_date,
            url
        });
        try {
            const newSong = await song.save();
            res.status(201).json(newSong);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    getSongId: async function(req,res){
        res.json(res.song);
    },
    putSong: async function(req,res ){
        try {
            const song = res.song;
            song.title = req.body.title || song.title;
            song.artists = req.body.artists || song.artists;
            song.genre = req.body.genre || song.genre;
            song.publication_date = req.body.publication_date || song.publication_date;
            song.url = req.body.url || song.url;

            const updateSong = await song.save()
            res.json(updateSong)
        } catch (error) {
            res.status(400).json({
                message: error.message
            })
        }
    },
    patchSong: async function(req,res ){
        if(!req.body.title && !req.body.artists && !req.body.genre && !req.body.publication_date && !req.body.url){
            res.status(400).json({message: 'completa al menos un campo'})
        }
        try {
            const song = res.song;
            song.title = req.body.title || song.title;
            song.artists = req.body.artists || song.artists;
            song.genre = req.body.genre || song.genre;
            song.publication_date = req.body.publication_date || song.publication_date;
            song.url = req.body.url || song.url;

            const updateSong = await song.save()
            res.json(updateSong)
        } catch (error) {
            res.status(400).json({
                message: error.message
            })
        }
    },
    deleteSong: async function(req,res ){
        const song = res.song;
        try {
            await song.remove();
            res.json({
                message: 'el libro se elimino ' + song.title
            })
        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }
       
     
    }
    

};
