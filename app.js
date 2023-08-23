const express = require('express');
const morgan = require('morgan');
const MovieController = require('./src/controllers/movie-controller');

// MovieController.findAllMovies();

// MovieController.findMovieByMovieNo(2);

MovieController.registNewMovie({

    title: 'Before sunrise',
    director: '리처드 링 클레이터',
    nation: '오스트리아',
    age: '15',
    category: '3'
});

MovieController.deleteMovieByMovieNo(2);

MovieController.updateMovieByMovieNo(
    1, 
    {
        title: 'Oppenheimer',
        director: 'Christopher Nolan',
        nation: 'United States, United Kingdom',
        age: '15',
        category: '7'
    });

    const app = express();

    app.use(morgan('dev'));
    app.use(express.json());

    const movieRouter = require('./src/routes/movie-route');
    app.use('/movies', movieRouter);

    app.listen(8888, () => console.log('Server is running on port 8888'));
