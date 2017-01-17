function calculateHypotenuse(a,b){
  if(Number.isInteger(a) && Number.isInteger(b) && a>0 && b>0) 
    return Number(Math.sqrt((a*a)+(b*b)).toFixed(3));
  throw "Error"
}