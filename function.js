/*function toUpper(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(function(word) {
            return word[0].toUpperCase() + word.substr(1);
        })
        .join(' ');
     }
     console.log(toUpper("hello friend"))*/

     
//const mySentence = "freeCodeCamp is an awesome resource";
//const words = mySentence.split(" ");
let mySentence = "Hello world";

console.log(mySentence.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()));

