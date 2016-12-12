// Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string
function LetterChanges(str) { 
var newStr = "";

	for(var i = 0; i<str.length; i++) {
   		if (str.charAt(i).match(/[a-z]/i)) {
        	x= String.fromCharCode(str.charAt(i).charCodeAt(0) + 1);
        	newStr+=x;
    	}
    	else{
       		 newStr+=str.charAt(i);
        }
 	}
	return newStr.replace(/[aeiou]/g, function(letter) {return letter.toUpperCase()}); ;         
}