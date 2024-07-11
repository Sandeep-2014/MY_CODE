const input = require("readline-sync");

let x = input.questionInt("pooja has scored x marks: ");
let y = input.questionInt("komal has scored y marks: ");

if(x>y){
    console.log("Yes");
}else{
    console.log("No");
}