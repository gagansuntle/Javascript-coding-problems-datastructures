function SimpleMode(arr) { 
var obj = {};
for(var i =0; i<arr.length; i++) {
  if(obj[arr[i]]==null) {
    obj[arr[i]] = 1;
  }
  else{
    obj[arr[i]]++;
  }
}
var max = 0;
var mode = "";
for(var prop in obj) {
  if(obj[prop]>max)
    {
      max = obj[prop];
      mode = prop;
    }
}
if(max==1){
    return -1;
}
return mode;
  
         
}
