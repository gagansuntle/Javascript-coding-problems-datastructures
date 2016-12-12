//Have the function NonrepeatingCharacter(str) take the str parameter being passed, which will contain only alphabetic characters and spaces, and return the first non-repeating character. For example: if str is "agettkgaeee" then your program should return k. The string will always contain at least one character and there will always be at least one non-repeating character. 
function NonrepeatingCharacter(str) { 
    
   var obj = {};
   for(var i =0; i<str.length; i++) {
        if(!obj[str[i]]){
          
            obj[str[i]]=1;
        }   
        else{
            obj[str[i]]++;
        }
   }
   console.log(obj)
   for(var j = 0; j<str.length; j++){
       if(obj[str[j]]===1){
           return str[j];
       }
   }
   return str;
}