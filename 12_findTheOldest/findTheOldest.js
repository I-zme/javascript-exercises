
const findTheOldest = function(people) {
   let oldestOne=0;
   let indexOfOldest;
   let age;
   for(let i=0; i<people.length;i++){
    if(['yearOfDeath'] in people[i]){
        age=people[i]['yearOfDeath']-people[i]['yearOfBirth'];
    }
    else{
        age=new Date().getFullYear()-people[i]['yearOfBirth'];
    }

    if(age>oldestOne){
        oldestOne=age;
        indexOfOldest = i;
    }
   }
   return people[indexOfOldest]
};

// Do not edit below this line
module.exports = findTheOldest;
