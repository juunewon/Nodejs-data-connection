const HttpStatus = require('http-status');
const MovieService = require('../services/movie-service');
const MovieDTO = require('../dto/movie-dto');

exports.findAllMovies = async () => {

    const results = await MovieService.findAllMovies();

    console.log(results);

    results.status(HttpStatus.Ok).send({
        status: HttpStatus.Ok,
        message: 'OK',
        results: results
    });
};

exports.findMovieByMovieNo = async (req, res, next) => {

    movieNo = req.params.movieNo;
    
    const result = await MovieService.findMovieByMovieNo(movieNo);

    if(result && result.length > 0) {
        res.status(HttpStatus.OK).send({
            status: HttpStatus.OK,
            message: 'OK',
            results: result
        });
    }
    if (result && result.length === 0) {
        res.status(HttpStatus.NOT_FOUND).send({
            status: HttpStatus.NOT_FOUND,
            message: 'NOT_FOUND',
            results: result
        });
    }
};

exports.registNewMovie = async (req, res, next) => {

    newMovie = new MovieDTO(req.body);

    const result = await MovieService.registNewMovie(newMovie);

    if(result) {

        res.status(HttpStatus.CREATED).send({
            status: HttpStatus.CREATED,
            message: 'CREATED',
            results: {
                movieNo: result.movieNo,
                title: result.title,
            },
            contentLocation: `/movie/${result.movieNo}`
        });
    } else {
        res.status(HttpStatus.BAD_REQUEST).send({
            status: HttpStatus.BAD_REQUEST,
            message: 'BAD_REQUEST',
            results: [],
            links: [
                {
                    rel: 'movieRegist',
                    method: 'POST',
                    href: ''
                }
            ]
        });
    }
}

exports.deleteMovieByMovieNo = async (req, res, next) => {

    movieNo = req.params.movieNo;

    const result = await MovieService.deleteMovieByMovieNo(MovieNo);

    if (result) {

        res.status(HttpStatus.OK).send({
            status: HttpStatus.OK,
            message: 'OK',
            results: 
            {
                movieNo: movieNo,
            }
        });
    } else {
        res.status(HttpStatus.NOT_FOUND).send({
            status: HttpStatus.NOT_FOUND,
            message: 'NOT_FOUND',
            results: [],
            links: [
                {
                    rel: 'deleteMovie',
                    method: 'DELETE',
                    href: ''
                }
            ]
        })
    }
}

exports.updateMovieByMovieNo = async (req, res, next) => {

    movieNo = req.params.movie_No;
 
    changeInfo = new MovieDTO(req.body);
    console.log('changeInfo: ', changeInfo.title);

    const result = await MovieService.updateMovieByMovieNo(movieNo, changeInfo);

    if (result) {
        res.status(HttpStatus.OK).send({
            status: HttpStatus.OK,
            message: 'OK',
            results: 
            {
                movieNo: movieNo,
            }
        });
    } else {
        res.status(HttpStatus.NOT_FOUND).send({
            status: HttpStatus.NOT_FOUND,
            message: 'NOT_FOUND',
            results: [],
            links: [
                {
                    rel: 'updateMovie',
                    method: 'PUT',
                    href: ''
                }
            ]
        })
    }
}
