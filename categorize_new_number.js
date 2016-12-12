// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input

// Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Example Input

// [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
function openOrSenior(data){
var newArray = [];
  for(var i =0; i<data.length; i++) {
    if(data[i][0]<55)
      newArray.push('Open');
    else if(data[i][0]>54 && data[i][1]>7)
      newArray.push("Senior");
    else if(data[i][0]>54 && data[i][1]<8)
      newArray.push("Open")
    
  }
  return newArray;
}