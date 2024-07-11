
// const input = require("readline-sync")
// let n = input.questionInt("enter the size of array: ")
// let x = input.questionInt("enter the value of x: ")
// let arr = []
// let count = 0;

// for(let i = 0; i<n; i++){
//     arr[i] = input.questionInt("enter an element: ")
// }
// for(let i = 0; i<n; i++){
//     if(arr[i]==x){
//         count++
//         break;
//     }
// }
// if(count>0){
//     console.log("YES");
// }else{
//     console.log("NO");
// }
// console.log(count);

// const input = require("readline-sync")
// let t = input.questionInt("enter the test case: ")

// for(let i = 0; i<t; i++){
//     let n = input.questionInt("enter the size of array: ")
//     let arr = [];
//     for(let j = 0; j<n; j++){
//         arr[j] = input.questionInt("enter the element of array: ")
//     }
//     let max = 0;;
//     for(let k = 0; k<n; k++){
//         if(arr[k]>max){
//             max = arr[k]
//         }
//     }
//     console.log(max);
// }


const input = require("readline-sync")
let t = input.questionInt("enter the testcase: ")

for(let i = 0; i<t; i++){
    let n = input.questionInt("enter the size of array: ")
    let discount_coupan = input.questionInt("enter the discout coupan amount: ")
    let y = input.questionInt("enter the number: ")
    let arr = []
    let sum = 0;
    let Total_discount = 0;
    for(let j = 0; j<n; j++){
        arr[j] = input.questionInt("enter the element of array: ")
        sum += arr[j];
    }
    for(let k = 0; k<n; k++){
        if(arr[k]<=y){
            arr[k] = 0;
        }else{
            Total_discount = arr[k] 
        }
    }
    if(Total_discount<sum){
        console.log("coupan");
    }else{
        console.log("no coupan");
    }
}