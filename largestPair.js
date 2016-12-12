//Have the function LargestPair(num) take the num parameter being passed and determine the largest double digit number within the whole number. For example: if num is 4759472 then your program should return 94 because that is the largest double digit number. The input will always contain at least two positive digits. 
function LargestPair(num) { 
var string = String(num);
var newString = string.split('');
var max = (Number(newString[0])*10)+ Number(newString[1]);
var newMax = 0;
for(var i = 1; i<newString.length-1; i++) {
    newMax = (Number(newString[i])*10)+ Number(newString[i+1]);
    console.log(newMax)
    if(newMax>max){
        console.log("reached here cuz "+newMax+" > "+max)
        max = newMax;
    }  
}
return max;
         
}