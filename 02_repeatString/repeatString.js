const repeatString = function(word,times) {
    if(times<0)
        return "ERROR";
    else{
        string="";
        for(let i=0; i<times; i++){
            string= string + word;
        }
        return string;
    }
};

// Do not edit below this line
module.exports = repeatString;
