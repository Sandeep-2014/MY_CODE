const input = require("readline-sync")
let side1 = input.questionInt("enter first side of triangle: ")
let side2 = input.questionInt("enter second side of triangle: ")
let side3 = input.questionInt("enter third side of triangle: ")

if(side1 != side2 && side2 != side3){
    if(side1 == side2 || side2 == side3 || side1 == side3){
        console.log("not valid");
    }else if(side2>side1 && side3>side1){
        console.log("not valid");
    }
    else{
        console.log("valid");
    }else if(side1>side2 && side3>side2){
        console.log("not valid");
    }else if(side1>side3 && side2.side3){
        console.log("not valid");
    }else{
        console.log("valid");
    }
}else{
    console.log("not valid");
}