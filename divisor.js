
// Create a function named divisors that takes an integer and returns an array with all of the integer's divisors(except for 1 and the number itself). If the number is prime return the string '(integer) is prime' (use Either String a in Haskell).

// Example:

// divisors(12); //should return [2,3,4,6]
// divisors(25); //should return [5]
// divisors(13); //should return "13 is prime"

function divisors(integer) {
  var test = Math.floor(integer/2);
  var newArr = [];
  while(test>1){
    if(integer%test===0) {
      newArr.push(test);
      test--;
    }
    else{
      test--;
    }
  }
  if(newArr.length==0)
    return integer+' is prime'
  else
    return newArr.sort(function(a,b) {
      return a-b
    })
  
};