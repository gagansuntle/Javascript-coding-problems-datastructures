// You get an array of numbers, return the sum of all of the positives ones.
function positiveSum(arr) {
var sum = 0;
  for(var i =0; i<arr.length; i++) {
    if(arr[i]>0) {
      sum = sum + arr[i];
    }
  }
  return sum;
}