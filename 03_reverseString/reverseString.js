const reverseString = function(a_string) {
    let reversedString='';
    for(let i=a_string.length;i>0;i--){
        reversedString += a_string[i-1];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
