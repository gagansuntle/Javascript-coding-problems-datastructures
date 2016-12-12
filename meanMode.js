//Have the function MeanMode(arr) take the array of numbers stored in arr and return 1 if the mode equals the mean, 0 if they don't equal each other (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)). The array will not be empty, will only contain positive integers, and will not contain more than one mode. 
function MeanMode(arr) { 
	var sum =0;
	for(var i =0; i<arr.length; i++) {
    	sum+=arr[i];
	}
	var mean = sum/arr.length;
	arr = arr.sort(function(a, b) {
    	return a-b;
	});

	var hash = {};
	var highest = 0;
	var mode = 0;
	for(var j = 0; j<arr.length; j++) {
    	    var number = arr[j];
        	if(hash[number]===undefined){
            	hash[number]=1;
        	}
        	else{
            	hash[number]++;
        	}
        	if(hash[number]>highest){
            	highest = hash[number];
            	mode = number;         
        	}
	}

	if(mode==mean)
    	return 1;
	else
    	return 0;

}