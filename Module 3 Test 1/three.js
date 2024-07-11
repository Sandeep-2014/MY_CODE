const input = require("readline-sync");
let N = input.questionInt("enter the value of First N: ")
let n = input.questionInt("enter the length of array: ")
let arr = [];
let sum = 0;

for(let i = 0; i<n; i++){
    arr[i] = input.questionInt("enter  the element of array: ")
}
for(let i = 0; i<N; i++){
    sum = sum + arr[i];
}
console.log(sum);

