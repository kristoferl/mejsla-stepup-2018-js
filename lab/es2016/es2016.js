'use strict';

const movies = [
  {
    "title": "Avengers: Infinity War",
    "imdb": {
      "rating": 8.6
    },
    "people": {
      "actors": [
        "Robert Downey Jr.",
        "Chris Hemsworth",
        "Mark Ruffalo",
        "Chris Evans",
        "Scarlett Johansson"
      ],
      "directors": [
        "Anthony Russo",
        "Joe Russo"
      ]
    }
  },
  {
    "title": "Inception",
    "imdb": {
      "rating": 8.8
    },
    "people": {
      "actors": [
        "Leonardo DiCaprio",
        "Joseph Gordon-Levitt",
        "Ellen Page",
        "Tom Hardy",
        "Ken Watanabe"
      ],
      "directors": [
        "Christopher Nolan"
      ]
    }
  },
  {
    "title": "Terminator",
    "imdb": {
      "rating": 8.0
    },
    "people": {
      "actors": [
        "Arnold Schwarzenegger",
        "Michael Biehn",
        "Linda Hamilton",
        "Paul Winfield",
        "Lance Henriksen"
      ],
      "directors": [
        "James Cameron"
      ]
    }
  }
];

const [movie] = movies;
console.log(movie);

// Excessive use of destructuring is encouraged
// 1. Exclude the first movie
// 2. Extract the first actor in every movie
// 3. Extract which movie that is deirect by "James Cameron"
// 4. SHow all movies that have an imdb rating > 8