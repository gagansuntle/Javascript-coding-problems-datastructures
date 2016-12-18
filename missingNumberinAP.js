var findMissing = function (list) {  
  var difference = [];
  for(var i =1; i<list.length; i++) {
    difference.push(list[i]-list[i-1]);
  }
   console.log(difference)
  for(var j =0; j<list.length; j++) {
    if(difference[j]!=difference[j+1]){
      var missing = list[j]+difference[j+1];
      break;
    }
  }
  return missing
  
}