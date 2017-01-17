// Your friend Cody has to sell a lot of jam, so he applied a good 25% discount to all his merchandise.

// Trouble is that he mixed all the prices (initial and discounted), so now he needs your cool coding skills to filter out only the discounted prices.

// For example, consider this inputs:

// "15 20 60 75 80 100"
// "9 9 12 12 12 15 16 20"
// They should output:

// "15 60 75"
// "9 9 12 15"

function findDiscounted(prices){
  prices = prices.split(' ');
  var prices = prices.map(function(x) {
    return Number(x)
  }).sort(function(a, b) {
    return a-b
  })
  var newArray = [];
  var boolArray = [];
 for(var k =0; k<prices.length; k++) {
   boolArray[k] = true;
 }
  for(let i = 0; i<prices.length; i++) {
    for(let j = i+1; j<prices.length; j++) {
      if((prices[j]*0.75)==prices[i] && boolArray[i]==true && boolArray[j]==true) {
        console.log(prices[j]+" "+prices[i])
        newArray.push(prices[i]);
        boolArray[i] = false;
        boolArray[j] = false;
      }
    }
  }
  var string = '';
  for(var i=0; i<newArray.length; i++) {
    if(i===newArray.length-1){
      string+=newArray[i];
    }
    else{
      string+=newArray[i]+' '  
    }
    
  }
  return string
}