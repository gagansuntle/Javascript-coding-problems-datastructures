// Your goal in this kata is to implement an difference function, which subtracts one list from another.

// It should remove all values from list a, which are present in list b.

// difference([1,2],[1]) == [2]
function array_diff(array1, array2) {
  var obj = {};
  var newArr = [];
  for(var i =0; i<array2.length; i++) {
    if(!obj[array2[i]]){
      obj[array2[i]] = 1;
    }
    else{
      obj[array2[i]]++;
    }
  }
  for(var j =0; j<array1.length; j++) {
    if(!obj[array1[j]]){
      newArr.push(array1[j]);
    }
  }
  return newArr;
}