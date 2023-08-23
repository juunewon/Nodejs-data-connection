const movieQuery = require('../database/movie-query');

exports.findAllMovies = (connection) => {

    return new Promise((resolve, reject) => {

        connection.query(movieQuery.findAllMovies(), (err, result) => {
            if(err) {
                reject(err);
            }

            resolve(result);
        });
    });
};

exports.findMovieByMovieNo = (connection, movieNo) => {

    return new Promise((resolve, reject) => {

        connection.query(movieQuery.findMovieByMovieNo(), 
        [movieNo], 
        (err, result) => {
            if(err) {
                reject(err);
            }

            resolve(result);
        });
    });
};

exports.registNewMovie = (connection, newMovie) =>{

    return new Promise((resolve, reject) => {
        
        connection.query(
            movieQuery.registNewMovie(),
        [
            newMovie.title,
            newMovie.director,
            newMovie.nation,
            newMovie.age,
            newMovie.category
        ],
        (err, result) => {
            if(err) {
                reject(err);
            }
            console.log('repo result : ', result);

            resolve(result);
        });
    });
};

exports.deleteMovieByMovieNo = (connection, movieNo) => {

    return new Promise((resolve, reject) => {

        connection.query(
            MovieQuery.deleteMovieByMovieNo(),
            [movieNo],
            (err, result) => {
                if(err) {
                    reject(err);
                }

                resolve(result);
            });
    });
};

exports.updateMovieByMovieNo = (connection, movieNo, changeInfo) => {

    return new Promise((resolve, reject) => {

        connection.query(
            MovieQuery.updateMovieByMovieNo(),
            [
                changeInfo.title,
                changeInfo.director,
                changeInfo.nation,
                changeInfo.age,
                changeInfo.category,
                movieNo
            ], (err, result) => {
                if(err) {
                    reject(err);
                }
                
                resolve(result);
            }
        );
    });
};