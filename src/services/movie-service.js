const getConnection = require('../database/connection');
const MovieRepository = require('../repositories/movie-repo');

exports.findAllMovies = () => {

    return new Promise((resolve, reject) => {

        console.log('findAllMovies service function called');

        const connection = getConnection();

        const results = MovieRepository.findAllMovies(connection);

        connection.end();

        resolve(results);
    });
}

exports.findMovieByMovieNo = (movieNo) => {

    return new Promise((resolve, reject) => {

        console.log('findMovieByMovieNo service function called');

        const connection = getConnection();

        const results = MovieRepository.findMovieByMovieNo(connection, movieNo);

        connection.end();

        resolve(results);
    });
}

exports.registNewMovie = (newMovie) => {

    return new Promise(async (resolve, reject) => {

        console.log('registNewMovie service function called');

        const connection = getConnection();

        connection.beginTransaction();

        try {

            const result = await MovieRepository.registNewMovie(connection, newMovie);
            console.log('result', result.insertId);

            const insertedMovie = await MovieRepository.findMovieByMovieNo(connection, result.insertedId);
            console.log('insertedMovie', insertedMovie);

            connection.commit();
            console.log('commit successfully');

            resolve(insertedMovie);
        } catch (err) {

            connection.rollback();
            console.error('rollback successfully');

            reject(err);
        } finally {
            connection.end();
            console.log('connection end');
        }
    })
}

exports.deleteMovieByMovieNo = (movieNo) => {

    return new Promise(async (resolve, reject) => {

        const connection = getConnection();

        const result = await MovieRepository.deleteMovieByMovieNo(connection, movieNo);

        connection.end();

        resolve(result);
    });
};

exports.updateMovieByMovieNo = (movieNo, changeInfo) => {

    return new Promise(async (resolve, reject) => {
        
        const connection = getConnection();

        const result = await MovieRepository.updateMovieByMovieNo(connection, movieNo, changeInfo);

        connection.end();

        resolve(result);
    });
};