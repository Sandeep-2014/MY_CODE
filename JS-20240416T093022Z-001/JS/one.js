/*
    Instructions:
        1. Write your code below the "WRITE YOUR LOGIC HERE" comment
        2. Take input from terminal 
           e.g. 
           s1: pale
           s2: ealp
        3. Return true if strings are almost equal else return false
*/

var areAlmostEqual = function(s1, s2) {
    //WRITE YOUR LOGIC HERE
    
};

/*DO NOT CHANGE ANYTHING BELOW THIS LINE*/
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("s1: ", function(s1) {
    rl.question("s2: ", function(s2) {
        let count = 0;
        for(let i = 0; i<s1.length; i++ ){
            for(let j = 0; j<s2.length; j++){
                if(s1[i]==s2[j]){
                    count++;
                }
            }

        }
        let k = s1.length
        if(count == k){
            console.log("True");
        }
        else{
            console.log("False");
        }
        rl.close();
    });
});