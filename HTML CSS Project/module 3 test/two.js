// const input = require("readline-sync");

// let C = input.questionInt("enter the cost of bycycle: ");
// let S = input.questionInt("ebter  spends S rupees amount from her pocket money: ");
// let A = input.questionInt("enter receives a pocket money of A rupees amount from her parents: ");

let week = 0
let save_amount = A-S;
// // let i = save_amount
// // while(i<C){
// //     week++;
// //     i = i + save_amount
// // }
// // console.log(week+1);

// // or

week = Math.ceil(C/save_amount)
console.log(week);
