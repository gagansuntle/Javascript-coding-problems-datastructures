function LetterCapitalize(str) { 
    
	var newArray = str.split(" ");
	for(var i =0; i<newArray.length; i++) 
    	 newArray[i] = newArray[i].charAt(0).toUpperCase()+newArray[i].slice(1); 
	
  	return newArray.join(' ');          
}