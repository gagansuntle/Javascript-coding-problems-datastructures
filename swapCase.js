//Have the function SwapCase(str) take the str parameter and swap the case of each character. For example: if str is "Hello World" the output should be hELLO wORLD. Let numbers and symbols stay the way they are. 
function SwapCase(str) { 
    str = str.split('');
    for(var i = 0; i<str.length; i++) {
        if(str[i]===str[i].toUpperCase()){
            str[i] = str[i].toLowerCase();
            console.log(str[i]);
        }
        else{
            str[i] = str[i].toUpperCase();
        }
    }
    return str.join('');
         
}
   