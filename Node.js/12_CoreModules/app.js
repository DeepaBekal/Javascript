var file = require('fs');

file.writeFileSync('food.txt', 'Breakfast, Lunch, Dinner'); //creates a file and writes data into it
console.log(file.readFileSync('food.txt').toString()); //reads the file converts to string and prints to console

var file = require('path');

var webHome='Desktop/user//mywebsite/home.html';
var webAbout='Desktop/user/mywebsite/about.html';

console.log(file.normalize(webHome)); //corrects the path according to the OS
console.log(file.dirname(webHome)); //returns directory
console.log(file.basename(webHome)); //returns filename
console.log(file.extname(webHome)); //return file extension

/*keeps calling the function every 3s*/
setInterval(function(){
    console.log('hey there!');
},3000);

console.log(__dirname); //gives the directory of the current js file
console.log(__filename); // gives the name of current js file

