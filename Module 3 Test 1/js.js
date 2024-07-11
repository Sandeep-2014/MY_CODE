const input = require("readline-sync")
let str = input.question("enter the string: ")
let high_fr = 0;
let low_fr = 12478988098;
let highest_word;
let lowest_word;
console.log(str);

for(let i = 0; i<str.length; i++){
    let fr = 0
    for(let j = 0; j<str.length; j++){
        if(str[i] == str[j]){
            fr++;    
        }
    }
    let fr1 = fr
    if(fr1>high_fr){
        highest_word = str[i];
        high_fr = fr1;
    }
}
console.log(high_fr);
for(let i =0; i<str.length; i++){
    let fr2 = 0
    for(let j = 0; j<str.length; j++){
        if(str[i] == str[j]){
            fr2++;
        }
    }
    fr3 = fr2;
    if(fr3<low_fr){
        low_fr = fr3;
        lowest_word = str[i]
    }

}
console.log(low_fr);
const newstr= str.replaceAll(highest_word,lowest_word);
console.log(newstr);
// for(let k = 0; k<str.length; k++){
//     if(str[k] == highest_word){
//         str[k] = str.replace();
//     }
// }
// console.log(lowest_word);
// console.log(highest_word);
// str.replaceAll(highest_word,lowest_word)
// console.log(str);
