const removeFromArray = function(myArray, ...Args) {

    OuterI:for(let i=0; i<=myArray.length;i++){
        InnerJ:for(let j=0; j<Args.length;j++){
            console.log(Args[j]);//debugging

            if(myArray[i]===Args[j]){
                myArray.splice(i,1);

                console.log(myArray+"=myArray");
                if(i===0){i=-1;}
                else{i--;}
                break InnerJ;
            }
        }
    }
    return myArray
};

// Do not edit below this line
module.exports = removeFromArray;
