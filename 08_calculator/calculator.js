const add = function(num1, num2) {
	return num1+num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(myArray) {
	let sum=0;
  for(num of myArray){
    sum+=num;
  }
  return sum
};

const multiply = function(myArray) {
  let result;
  if(myArray.length!==0){
    result=1;
  }
  for(num of myArray){
   result*=num; 
  }
  return result
};

const power = function(num1, num2) {
	return num1**num2;
};

const factorial = function(num1) {
	let result;
  if(num1!==null){
    result=1;
  }
  for(let i=1; i<=num1;i++){
    result*=i;
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
