// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) 
function anagrams(word, words) {
  var newArray = [];
  var firstword = word.split('').sort().join('');
  for(var i =0; i<words.length; i++) {
      wordtest = words[i].split('').sort().join('');
      if(wordtest==firstword){
        newArray.push(words[i]);
      }
    
  }
  return newArray;
}