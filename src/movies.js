// Iteration 1: All directors? - Get the array of all directors.

// const allDirectors = movies.map(function (movie) {
//     return movie.director;
// });


function getAllDirectors(movies) {

    let allDirectors = movies.map(function (movie) {
        return movie.director;
    });

    return allDirectors;

} 
    
//console.log(getAllDirectors(movies));

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

//filter()


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

// 


function howManyMovies(movies) {
    let spielbergMovies = movies.filter(function (movie) {
        if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")) {
            return true;
        }
    });
    return spielbergMovies.length;
}

//console.log(howManyMovies(movies));



// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    if (movies.length === 0) {
        return 0;
}
    let rates = movies.reduce(function (total, movie) {

        return total + movie.rate;
    }, 0);
    return Math.round((rates / movies.length) * 100) /100; 
} 

//console.log(ratesAverage(movies));



// Iteration 4: Drama movies - Get the average of Drama Movies


function dramaMoviesRate(moviesArray) {

    let dramaMovies = moviesArray.filter(function (movie) {
        if (movie.genre.includes("Drama")) {
            return true;
        }
    });

    if (dramaMovies === undefined || dramaMovies.length === 0) {
        return 0;
    }

    let dramaRates = dramaMovies.reduce(function (total, dramaMovie) {
        return total + dramaMovie.rate;
    }, 0);
    return Math.round((dramaRates / dramaMovies.length) * 100) /100;

}


// console.log(dramaMoviesRate(movies));


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    let sortedMoviesByYear = movies.sort(function (a, b) {
        return a.year - b.year;
    });

    let newArraySortedMoviesByYear = [];
    sortedMoviesByYear.forEach(function(sortedMovieByYear)  {
        newArraySortedMoviesByYear.push(sortedMovieByYear);
    })
    return newArraySortedMoviesByYear;
}

// console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesParam);



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes



// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
