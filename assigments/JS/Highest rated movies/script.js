let movies = [
    {
        name: 'The Godfather',
        releaseYear: 1972,
        rating: 9.2,
        mainActors: ['Marlon Brando', 'Al Pacino', 'James Caan']
    },
    {
        name: 'The Shawshank Redemption',
        releaseYear: 1994,
        rating: 9.3,
        mainActors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton']
    },
    {
        name: 'Pulp Fiction',
        releaseYear: 1994,
        rating: 8.9,
        mainActors: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson']
    },
    {
        name: 'The Dark Knight',
        releaseYear: 2008,
        rating: 9.0,
        mainActors: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart']
    },
    {
        name: 'Forrest Gump',
        releaseYear: 1994,
        rating: 8.8,
        mainActors: ['Tom Hanks', 'Robin Wright', 'Gary Sinise']
    }
];

let movieContainer = document.querySelector('.movies-container');

movies = movies.sort((a, b) => {
    return b.rating - a.rating; 
});

let highestRatedMovie = movies[0];

movies.forEach((movie) => {
    let card = createMovieCard(movie);
    movieContainer.appendChild(card);

    if (movie === highestRatedMovie) {
        card.classList.add('highest-rated');
        card.classList.remove('movie-box');
    }
});

function createMovieCard(movie) {
    let movieBox = document.createElement('article');
    movieBox.classList.add('movie-box');
    movieBox.classList.add('bounce-in-top');

    let movieTitle = document.createElement('h3');
    movieTitle.classList.add('movie-title');
    movieTitle.textContent = movie.name;

    let releaseDate = document.createElement('span');
    releaseDate.classList.add('release-date');
    releaseDate.textContent = movie.releaseYear;

    let movieRating = document.createElement('span');
    movieRating.classList.add('rating');
    movieRating.textContent = movie.rating;

    let movieMainActors = document.createElement('span');
    movieMainActors.classList.add('main-actors');
    movieMainActors.textContent = movie.mainActors.join(', ');

    let movieBottom = document.createElement('div');
    movieBottom.classList.add('movie-bottom');

    movieBottom.appendChild(releaseDate);
    movieBottom.appendChild(movieRating);

    movieBox.appendChild(movieTitle);
    movieBox.appendChild(movieMainActors);
    movieBox.appendChild(movieBottom);

    return movieBox;
} 