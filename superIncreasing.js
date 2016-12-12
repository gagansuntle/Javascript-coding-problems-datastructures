//Have the function Superincreasing(arr) take the array of numbers stored in arr and determine if the array forms a superincreasing sequence where each element in the array is greater than the sum of all previous elements. The array will only consist of positive integers. For example: if arr is [1, 3, 6, 13, 54] then your program should return the string "true" because it forms a superincreasing sequence. If a superincreasing sequence isn't formed, then your program should return the string "false" 

function Superincreasing(arr) { 
for(var i =1; i<arr.length; i++) {
    var sum =0;
    for(var j = i-1; j>=0; j--) {
        sum+=arr[j];
        
    }
    console.log(sum)
    if(sum>arr[i] || sum==arr[i]){
        return false;
    }
}
return true;
  // code goes here  
   
         
}