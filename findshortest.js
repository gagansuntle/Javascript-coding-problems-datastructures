
// x Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  var newArray = s.split(' ');
  var shortest = newArray[0];
  
  for(var i =1; i<newArray.length; i++) {
    if(newArray[i].length<shortest.length)
    {
      shortest = newArray[i];
    }
  }
  return shortest.length;
}