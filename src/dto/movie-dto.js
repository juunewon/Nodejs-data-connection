class MovieDTO {

    movie_no;
    title;
    director;
    nation;
    age;
    category;

    constructor(data) {
        this.movie_no = data.movie_no;
        this.title = data.title;
        this.director = data.director;
        this.nation = data.nation;
        this.age = data.age;
        this.category = data.category;
    }  
}

module.exports = MovieDTO;