//Have the function NextPalindrome(num) take the num parameter being passed and return the next largest palindromic number. The input can be any positive integer. For example: if num is 24, then your program should return 33 because that is the next largest number that is a palindrome. 
function NextPalindrome(num) { 
    var palindrome = false;
    var value = 0;
    while(!palindrome) {
        num++;
        if(findPalindrome(num)){
            value = num;
            break;
        }
    }
  return value;          
}

function findPalindrome(num) {
    num = String(num);
    var num1 = num.split('');
    var reverse = num1.reverse().join('');
    if(num===reverse){
        return true;
    }
}