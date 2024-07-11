for(let i = 0; i<nums.length; i++){
    if(nums[i] == 0){ 
        nums[i] = 1;

    }
}
let q = 0
let count = 0
for(let i = 0; i<nums.length; i++){
    if(nums[i] == 1){
        count++

    }
    else if(count>q){
        q=count;
        count = 0;
    }
     
}
console.log(q);