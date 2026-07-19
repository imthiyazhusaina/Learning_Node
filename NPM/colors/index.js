const color = require('colors');
const joke = require('../Jokes/node_modules/give-me-a-joke');
console.log(color.red.underline('This is red text'));
console.log('This is green text'.red.inverse);
console.log(color.trap('This is blue text'));
console.log(color.zebra('This is zebra text'));
console.log(color.rainbow('This is rainbow text'));
console.log(color.random('This is random text'));
console.log(color.bold('This is bold text'));
console.log(color.italic('This is italic text'));
console.log(color.dim('This is dim text'));
console.log(color.strikethrough('This is strikethrough text'));
console.log(color.underline('This is underlined text'));
console.log(color.inverse('This is inverse text'));
console.log(color.hidden('This is hidden text'));
console.log(color.brightRed('This is bright red text'));
console.log(color.brightGreen('This is bright green text'));

joke.getRandomDadJoke(function(joke) {
    console.log(color.rainbow(joke));
});