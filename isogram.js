// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
function isIsogram(str){
var str= str.toLowerCase();
if(str.length==0){
    return true;
  }
  else {
    for(var i =0; i<str.length; i++) {
         var current = str.charAt(i);
         for(var j =0 ; j<str.length; j++) {
             if(current==str.charAt(j) && j!=i){
               return false;
             }
         }
    }
    return true;
  }
}