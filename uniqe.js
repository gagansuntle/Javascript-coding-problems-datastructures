// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains more than 3 numbers.

function findUniq(arr) {
  var obj = {};
  arr.forEach(function(x) {
    if(!obj[x]) {
      obj[x] = 1
    }
    else{
      obj[x]++;
    }
  })
  for(var x in obj) {
    if(obj[x] == 1) {
      return Number(x)
    }
  }
}