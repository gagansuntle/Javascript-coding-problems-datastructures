function solution(digits){
  var newArray = [];
  var newString = "";
  for(var i =0; i<(digits.length-4); i++) {
    newString = newString+digits.charAt(i)+digits.charAt(i+1)+digits.charAt(i+2)+digits.charAt(i+3)+digits.charAt(i+4);
    newString = Number(newString)
    newArray.push(newString);
    newString = "";
  }
  newArray = newArray.sort();
  return newArray[newArray.length-1];
}