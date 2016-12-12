//Have the function Palindrome(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. For example: "racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string. 
function Palindrome(str) { 

 var newString = str.split(' ');
 newString = newString.join('');
 var orignal = newString;
 newString = newString.split('');
 
 var reversed = newString.reverse();
 reversed = reversed.join('');
 newString = newString.join('');
 
if(orignal==reversed){
    return "true";
}
else{
    return "false"
}
}