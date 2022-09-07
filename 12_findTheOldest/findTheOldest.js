/*  PSEUDOCODE
    
    create variable oldestOne
    loop over people
        find ages using death year - birth year
        first person['name'] becomes oldestOne
        find age of next person
            IF the person is older
                person becomes oldestOne
            ELSE keep the former one
    
    when finished iterating should have the oldest person
    return oldestOne
*/


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
