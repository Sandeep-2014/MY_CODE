/*
    Instructions:
        1. Write your code below the "WRITE YOUR LOGIC HERE" comment
        2. Take arr (seperated by space), m and k as input from terminal
           e.g.
           arr: 1 2 4 4 4 4
           m: 1
           k: 3
        3. Return true if a pattern of length m is repeated k or more times, else return false
*/

var containsPattern = function(arr, m, k) {
    //WRITE YOUR LOGIC HERE
    
    let patter_length = 0
    let n = 0;
    for(let  i = 0; i<arr.length; i++){
        let j = i+m
        while(n<m){
            if(j<=arr.length){
                if(arr[i] == arr[j]){
                    patter_length++;
                    n++;
                    i++;
                    j++;
                }
                else{
                    break;
                }
            }
                
        }
        if(patter_length != m){
            patter_length = 0;
            n = 0;
        }
        else{
            break;
        }
         
    }
    console.log(patter_length);
    let count1 = 1;
    let repetition = 0

    if(patter_length == m){
        for(let i = 0; i<arr.length; i++){
            let p = 0;
            while(p<m){
                if(arr[i+p] == arr[i+m+p]){
                    repetition++
                    p++;
                    
                }
                else{
                    break;
                }
                
                
            }
            if(repetition == m){
                count1++;
                i = i + m - 1
                repetition=0;
            }

        }
        console.log(count1);
        if(count1>=k){
            console.log("True");
        }
        else{
           console.log("False");
        }
    }
    else{
        console.log("False");
    }
    
};

//const { count } = require('console');
/*DO NOT CHANGE ANYTHING BELOW THIS LINE*/
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("arr: ", function(s) {
    var arr = s.split(" ").map(Number);
    rl.question("m: ", function(s) {
        var m = Number(s);
        rl.question("k: ", function(s) {
            var k = Number(s);
            if (containsPattern(arr, m, k)) {
                console.log("true");
            } else {
                console.log("false");
            }
            rl.close();
        });
    });
});
