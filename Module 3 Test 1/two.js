const input = require("readline-sync")
let N = input.questionInt("enter the seconds: ")

let hour = Math.floor(N/3600)
N = N%3600;
let minute = Math.floor(N/60)
let second = N%60;
// console.log(hour);
// console.log(minute);
// console.log(second);
console.log(`${hour} ${minute} ${second} `);


