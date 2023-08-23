const express = require('express');
const router = express.Router();
const MovieController = require('../controllers/movie-controller');

router.get('/', MovieController.findAllMovies);
router.get('/:movieNo', MovieController.findMovieByMovieNo);
router.post('/', MovieController.registNewMovie);
router.put('/:movieNo', MovieController.updateMovieByMovieNo);
router.delete('/:movieNo', MovieController.deleteMovieByMovieNo);

module.exports = router;