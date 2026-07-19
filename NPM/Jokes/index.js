const jokes = require('give-me-a-joke');
// console.dir(jokes);
jokes.getRandomDadJoke (function(joke) {
    console.log(joke);
});

jokes.getRandomCNJoke (function(joke) {
    console.log(joke);
});

var fn = "Jackie";
var ln = "Chan";
jokes.getCustomJoke (fn, ln, function(joke) {
    console.log(joke);
});

var category = "blonde";
jokes.getRandomJokeOfTheDay (category, function(joke) {
     // NOTE: The service provider has made the restriction of 5 calls an hour for RandomJokeOfTheDay
    console.log(joke);
});