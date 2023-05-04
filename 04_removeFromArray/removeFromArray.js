const removeFromArray = function(array,...args ) {
    for (let i=1; i<arguments.length; i++){
        if(array.indexOf(arguments[i])>=0){
            
            array.splice(array.indexOf(arguments[i]),1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
