//Have the function RunLength(str) take the str parameter being passed and return a compressed version of the string using the Run-length encoding algorithm. This algorithm works by taking the occurrence of each repeating character and outputting that number along with a single character of the repeating sequence. For example: "wwwggopp" would return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols. 
function RunLength(str) {
  var strarr = str.split('');
  var newArr = [];
  var count = 1;
  for(var i=0; i<strarr.length; i++) {
    if(strarr[i]==strarr[i+1]){
      count++;
    }
    else{
      newArr.push(count+strarr[i]);
      count = 1;
    }
  }
  return newArr.join('');
}