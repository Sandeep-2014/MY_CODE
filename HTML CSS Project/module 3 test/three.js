const input = require("readline-sync");


let t=input.questionInt("Enter No: ")


let freshneshItem_arr =[];
let itemCost_arr = [];
let arr=[];

for(let i=1;i<=t; i++){

    let N = input.questionInt("enter the number of items in N: ");
    let X = input.questionInt("enter minimum freshnesh value of itme in X: ");
    let totalCost = 0;
    
    for(let i = 0; i<N; i++){
        freshneshItem_arr[i] = input.questionInt("enter the items: ");
    }
    for(let i = 0; i<N; i++){
        itemCost_arr[i] = input.questionInt("enter the cost of every itmes: ");
    }
    for(let i = 0; i<N; i++){
        if(freshneshItem_arr[i] >= X){
            totalCost = totalCost + itemCost_arr[i]
        }

    }
    arr.push(totalCost);

}
for(let i = 0; i<t; i++){
    console.log(arr[i]);
}



// for(let i=0; i<=10; i++){
//     for(let i=0; i<=100; i++){
//         console.log("Hello World");
//     }
// }

// let arr =[
//     {name: "mahavir",
//     ngid: "kumar@"},
//     {name: "sandeep",
//     ngid: "kumar@"},
//     {name: "krishna",
//     ngid: "kumar@"}
// ]


// for(let i=0; i<arr.length-1; i++){
//     console.log(arr[i]['name']);

// }

// for (const key of arr) {

//     for(ele in key){
//         console.log(key[ele]);
//     }
// }
