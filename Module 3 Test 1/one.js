const input = require("readline-sync")
let income = input.questionInt("enter the income:")
let tax;

if(income>30000){
    tax = (income*20)/100
}
else if(income>20000){
    tax = (income*15)/100
}
else if(income>10000){
    tax = (income*10)/100
}
else{
    tax = (income*5)/100
}
console.log(tax);