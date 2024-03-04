const Song = require('../models/song.model');
const moment = require('moment');

module.exports = {
    getAllSong: async function (req, res) {
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
    addNewSong: async function (req, res) {
        const { title, artists, genre, publication_date, url, album } = req?.body;
        if (!title || !artists || !genre || !publication_date || !url) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios' });
        }

        const song = new Song({
            title,
            artists,
            genre,
            publication_date,
            url,
            album
        });
        try {
            const newSong = await song.save();
            res.status(201).json(newSong);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    getSongId: async function (req, res) {
        res.json(res.song);
    },
    putSong: async function (req, res) {
        try {
            const song = res.song;
            song.title = req.body.title || song.title;
            song.artists = req.body.artists || song.artists;
            song.genre = req.body.genre || song.genre;
            song.publication_date = req.body.publication_date || song.publication_date;
            song.url = req.body.url || song.url;
            song.album = req.body.album || song.album;

            const updateSong = await song.save()
            res.json(updateSong)
        } catch (error) {
            res.status(400).json({
                message: error.message
            })
        }
    },
    patchSong: async function (req, res) {
        if (!req.body.title && !req.body.artists && !req.body.genre && !req.body.publication_date && !req.body.url) {
            res.status(400).json({ message: 'completa al menos un campo' })
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
    deleteSong: async function (req, res) {

        try {
            const song = res.song;
            await Song.deleteOne({
                _id: song._id
            });
            res.json({
                message: 'La cancion se elimino ' + song.title
            })
        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }
    },
    getAnio: async function (req, res) {
        try {
            const anio = req.params.anio;

            Song.find({
                publication_date: new RegExp(`${anio}$`)
            })
                .then(datos => {
                    res.json([{
                        "año": anio,
                        "Total": datos.length,
                        "songs": { datos }
                    }]);
                })
                .catch(error => {
                    res.status(500).json({ error: 'Error al obtener los datos' });
                });

        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
    getArtist: async function (req, res) {
        try {
            let feats = req.query.ft;
            if (!Array.isArray(feats)) {
                feats = [feats];
            }
            let artistString = feats.join(',');
            artistString = artistString.replace(/\s*,\s*/g, ',');

            const artists = artistString.split(',');

            const query = { artists: { $regex: artists.join('|'), $options: 'i' } };

            Song.find(query)
                .then(datos => {
                    res.json({
                        Total: datos.length,
                        songs: datos
                    });
                })
                .catch(error => {
                    res.status(500).json({ error: 'Error al obtener los datos', errorMessage: error.message });
                });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

}

