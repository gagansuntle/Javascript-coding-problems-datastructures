//Have the function HammingDistance(strArr) take the array of strings stored in strArr, which will only contain two strings of equal length and return the Hamming distance between them. The Hamming distance is the number of positions where the corresponding characters are different. For example: if strArr is ["coder", "codec"] then your program should return 1. The string will always be of equal length and will only contain lowercase characters from the alphabet and numbers. 
function HammingDistance(strArr) { 
  var string1 = strArr[0];
  var string2 = strArr[1];
  var count = 0;
  for(var i = 0; i<string1.length; i++) {
    if(string1.charAt(i)!=string2.charAt(i)){
      count++;
    }
  }
  return count;
}
