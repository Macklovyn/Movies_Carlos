const express = require('express');
const router = express.Router();
const MovieController = require('../controllers/Movie.controller');

router.get('/', MovieController.getMovie);

router.get('/:bookId', MovieController.getMovieById);

router.post('/', MovieController.newBook);

router.put('/:bookId', MovieController.updateMovie);

router.delete('/:bookId', MovieController.deleteMovie);

module.exports = router;


