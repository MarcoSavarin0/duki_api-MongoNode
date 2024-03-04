const Song = require('../models/song.model') 
const getSong = async (req, res, next) => {
    let song;
    const { id } = req.params;

    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(404).json(
            {
                message: 'El ID de la cancion no es válido'
            }
        )
    }

    try {
        song = await Song.findById(id);
        if (!song) {
            return res.status(404).json(
                {
                    message: 'la cancion no fue encontrado'
                }
            )
        }

    } catch (error) {
        return res.status(500).json(
            {
                message: error.message
            }
        )
    }

    res.song = song;
    next()
}

module.exports = {getSong: getSong};