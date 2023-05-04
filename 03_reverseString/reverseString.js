const reverseString = function(string) {
    let size=string.length;
    let reverseString='';
    for(let i=size-1; i>=0; i--){
        reverseString += string.charAt(i);
    }
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
