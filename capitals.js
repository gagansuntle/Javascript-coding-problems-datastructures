// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
var capitals = function (word) {
var newArray = [];
	for(var i =0; i<word.length; i++) {
     if(word[i]==word[i].toUpperCase()){
      newArray.push(i);
     }
  }
  return newArray;
};