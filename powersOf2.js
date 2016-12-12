function powersOfTwo(n){
 var newArray = [];
 for(var i =0; i<n+1; i++) {
   newArray.push(Math.pow(2,i))
 }
 return newArray;
}