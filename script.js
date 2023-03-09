const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}
for (let i = 0; i < 2; i++) {
    const lastFilm = prompt('Один из последних просмотренных фильмов?', '');
    const filmScore = prompt('На сколько оцените его?', '');
    personalMovieDB.movies[lastFilm] = filmScore;

    console.log(personalMovieDB);
}