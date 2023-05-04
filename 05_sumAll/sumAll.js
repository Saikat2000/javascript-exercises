const sumAll = function(num1,num2) {
    if(typeof(num1)==='number' && typeof(num2)==='number'){
        
        if(num1>=0 && num2>=0){
            let n=Math.abs(num2-num1)+1;
            let sum=((num1+num2)*n)/2;
            return sum;
        }
        else return "ERROR";
    }
    else return "ERROR";
    
};

// Do not edit below this line
module.exports = sumAll;
