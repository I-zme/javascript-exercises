const fibonacci = function(member) {
    if(member<0){
        answer= "OOPS";
    }
    else{
        member=parseInt(member);
        let fibonacciSequence = [0,1];
        if(member>=fibonacciSequence.length){
            for(let i=2; i<=member;i++){
                let nextSequenceNumber = fibonacciSequence[i-2]+fibonacciSequence[i-1];
                fibonacciSequence.push(nextSequenceNumber);
            }
        }
        answer= fibonacciSequence[member];
    }
    return answer
};

// Do not edit below this line
module.exports = fibonacci;
