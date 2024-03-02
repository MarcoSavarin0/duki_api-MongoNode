const express = require('express');
const router = express.Router();
const controller = require('../controller/song.controller')
const middleware = require('../middleware/song.middleware')
const authJwt = require('../middleware/authJwt')


router.get('/',controller.getAllSong)

router.post('/',authJwt ,controller.addNewSong)

router.get('/:id',middleware.getSong, controller.getSongId);

router.put('/:id',authJwt,middleware.getSong, controller.putSong)

router.patch('/:id',authJwt,middleware.getSong, controller.patchSong)

router.delete('/:id',authJwt,middleware.getSong, controller.deleteSong)


module.exports = router