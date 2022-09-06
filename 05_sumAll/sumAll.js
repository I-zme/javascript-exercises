/*PSEUDOCODE

OPTION SMART
we will use the arithmetic sequence sum equation: (A1 + An)(n/2)

define A1
define An
define An-A1=n
calculate sum using equation
return sum

OPTION DUMB (?)

let sum=0;
if a<b =>a=num1 and b=num2
loop from num1 to num2, increase by 1 every time
    sum+=iteration
return sum

*/



const sumAll = function(num1, num2) {
    
    const sumIt = function(smallerNumber,biggerNumber){
        let sum=0;
        for(i=smallerNumber;i<=biggerNumber;i++){
            sum+=i;
        }
        return sum
    }

    const isCorrectArgument = function(arg){
        let answer=true;
        if(arg<0 || !(Number.isInteger(arg))){
            answer=false;
        }
        return answer
    }

    let answer;
    if(isCorrectArgument(num1) && isCorrectArgument(num2)){
        if(num1<num2){
            answer=sumIt(num1,num2);
        }
        else if(num2<num1){
            answer=sumIt(num2,num1);
        }
    }
    else{
        answer="ERROR";
    }

    return answer
};

// Do not edit below this line
module.exports = sumAll;
