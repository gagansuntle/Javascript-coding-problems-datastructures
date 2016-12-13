//largest(1); //Should return 7
//largest(2); //Should return 97
var largest = (n) => {
  if(!Number.isInteger(n))
    return false;
  else {
    var number = String(n);
    var newNumber = "";
    for(var i =0; i<n; i++) {
      newNumber=newNumber+"9";
    }
    newNumber = Number(newNumber);
    while(!isPrime(newNumber))
      newNumber--;
      
      if(newNumber==0)
        return false;
        
    return newNumber;
  }
}

var isPrime = function(n) {
  for(var i =2; i<(n/2); i++ ) {
    if(n%i==0)
      return false;
  }
  return true;
}