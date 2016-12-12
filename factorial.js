function FirstFactorial(num) { 
    if(num==0)
        return 1;
    else if (num==1)
        return 1;
    else{
       return num * FirstFactorial(num-1)
    }
         
}