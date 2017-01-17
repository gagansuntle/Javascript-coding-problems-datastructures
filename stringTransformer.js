// Description:

// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// For example:

// stringTransformer('Example Input')/string_transformer("Example Input") (depending on the language you are completing the Kata in) should return 'iNPUT eXAMPLE'

// You may assume the input only contain English alphabet and spaces.


function stringTransformer(str) {
  var str = str.split(' ');
  str = str.reverse();
  str = str.join(' ');
  newStr = ''
  for(var i=0; i<str.length; i++) {
    if(str[i]===str[i].toUpperCase()) 
      newStr+=str[i].toLowerCase();
    else
      newStr+=str[i].toUpperCase();
  }
  return newStr
}