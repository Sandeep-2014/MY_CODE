const input = require("readline-sync");
str = input.question("enter the string: ");

// let last_word = str[str.length - 1];
// let first_word = str[0]
// console.log(last_word);
// console.log(first_word);
let length = str.length
let str1 = str.slice(1,str.length-1)
console.log(str1);