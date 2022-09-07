const palindromes = function (myString) {
    let newString=[];
    let Palindrome="ERROR";
    for(char of myString.toLowerCase()){
        if(char.match(/[a-z]/)){
            newString.push(char);
        }
    }

    isPalindrome:for(let i=0;i<=Math.floor(newString.length/2);i++){
        while(newString[i]!==newString[newString.length-1-i]){
            Palindrome=false;
            break isPalindrome
        }
    Palindrome = true;
    }
    return Palindrome
};

// Do not edit below this line
module.exports = palindromes;
