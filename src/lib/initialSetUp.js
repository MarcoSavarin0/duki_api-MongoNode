const Role = require('../models/roles.model')
const Song = require('../models/song.model')
const dukiSong = require('./dukiSong.songs.json')

module.exports = {
    createRoles: async function () {
        try {
            const count = await Role.estimatedDocumentCount()
            if (count > 0) return

            const values = await Promise.all([
                new Role({ name: 'user' }).save(),
                new Role({ name: 'moderator' }).save(),
                new Role({ name: 'admin' }).save()
            ])
            console.log(values);
        } catch (error) {
            console.log(error);
        }
    },
    createSongs: async function () {
        try {
            const count = await Song.estimatedDocumentCount();
            if (count > 0) return;

            const songs = await Promise.all(dukiSong.map(async (song) => {
                return new Song(song).save();
            }));
            console.log(songs);
        } catch (error) {
            console.log(error);
        }
    }
}
