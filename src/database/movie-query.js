exports.findAllMovies = () => {

    return `
        SELECT * 
            FROM MOVIE
            `;
};

exports.findMovieByMovieNo = (movieNo) => {

    return `SELECT *
    FROM MOVIE
    WHERE MOVIE_NO = ? 
    `;
};

exports.registNewMovie = () => {

    return `
    INSERT
    INTO MOVIE
    (TITLE, DIRECTOR, NATION, AGE, CATEGORY)
    VALUES
    (?,?,?,?,?)
    `;
};

exports.deleteMovieByMovieNo = () => {

    return `
    DELETE FROM MOVIE
    WHERE MOVIE_NO =?
    `;
};

exports.updateMovieByMovieNo = () => {
    
    return `
    UPDATE MOVIE
    SET TITLE =?,
        DIRECTOR =?,
        NATION =?,
        AGE =?,
        CATEGORY =?
        WHERE MOVIE_NO =?
    `;
}