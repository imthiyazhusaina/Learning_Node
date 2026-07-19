const figlet = require('figlet');
figlet.text('Hello World!', {
    horizontalLayout: 'default',
    verticalLayout: 'default'
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...'); 
        return;
    }
    console.log(data);
});