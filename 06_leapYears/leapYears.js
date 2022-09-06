/*
if (year/4 )
    if year/100 && year/400) || !year/100
    return leap year
*/

const leapYears = function(userYear) {
    let isleapyear = false;
    if(userYear%4===0){
        if(!(userYear%100===0) || userYear%400===0){
            isleapyear = true;
        }
    }
    
    return isleapyear
};

// Do not edit below this line
module.exports = leapYears;
