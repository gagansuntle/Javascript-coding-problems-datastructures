function LongestWord(sen) { 

  var array = sen.split(' ');
  var count =0;
  var index = 0;
  for(var i = 1; i<array.length; i++){
        count = array[0].length;
        if(array[i].length>count)
            count = array[i].length;
            index = i;
  }
  
  return array[index]; 
         
}