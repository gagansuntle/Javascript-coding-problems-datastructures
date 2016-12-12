function NumberAddition(str) {  
var re = /[0-9]+/g;
 str = str.match(re) || [0];
    var sum= str.reduce(function(previousValue, currentValue) {
  		return Number(previousValue) + Number(currentValue);
	})
    
    return sum;
}