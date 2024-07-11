/*
    Instructions:
        1. Write your code below the "WRITE YOUR LOGIC HERE" comment
        2. Take input from terminal (seperated by spaces) to receive the list 
           e.g.
           1 0 1 1 0
        3. Return the maximum number of consecutive ones in the list after replacing at max one 0 with 1
*/

var findMaxConsecutiveOnes = function(nums) {
let i = 0;
while(i<nums.length){
    if(nums[i]==0){
        nums[i] = 1;
        break;
    }
    else{
        i++;
    }
}
let count1 = 0;
let j = 0;
while(j<nums.length){
    if(nums[j]==1){
        count1++;
        j++
    }
    else{
        break;
    }
}

console.log(count1);
    
};

const { count } = require('console');
/*DO NOT CHANGE ANYTHING BELOW THIS LINE*/
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("nums: ", function(s) {
    const nums = s.split(" ").map(Number);
    console.log(findMaxConsecutiveOnes(nums));
    rl.close();
 });

    


         
