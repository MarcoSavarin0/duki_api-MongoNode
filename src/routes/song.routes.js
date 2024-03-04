const express = require('express');
const router = express.Router();
const controller = require('../controller/song.controller')
const middleware = require('../middleware/song.middleware')
const authJwt = require('../middleware/authJwt')


router.get('/',controller.getAllSong)

router.get('/year/:anio', controller.getAnio)

router.get('/with', controller.getArtist)

router.get('/:id',middleware.getSong, controller.getSongId);

router.post('/',authJwt ,controller.addNewSong)

router.put('/:id',authJwt,middleware.getSong, controller.putSong)

router.patch('/:id',authJwt,middleware.getSong, controller.patchSong)

router.delete('/:id',authJwt,middleware.getSong, controller.deleteSong)



module.exports = router