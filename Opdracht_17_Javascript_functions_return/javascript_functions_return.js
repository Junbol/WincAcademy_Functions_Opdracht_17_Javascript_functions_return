console.log("Javascript and Node are working");

// FUNCTION 1> RETURN function that DO something> Checking if a number is big

/* let passedReturn = false;

const checkNumber = function (numberA) {
  if (numberA > 100) {
    console.log("This is bigger than 100");
    passedReturn = true;
    return passedReturn;
  } else {
    console.log("This number is smaller than 100");
    passedReturn = false;
    return passedReturn;
  }
};

checkNumber(115); // this returns:This is bigger than 100

console.log(passedReturn); // this returns:true 






// FUNCTIONS 2 > RETURN function that DO something> Bouncer at a club

const maxPeopleIntheClub = 500; // parameter numberA
const currentPeopleIntheClub = 450; //parameter numberB
const ageAllow = 18; //parameter age

const bouncerControl = function (numberA, numberB,age) {
  if (numberA === maxPeopleIntheClub && numberB <= maxPeopleIntheClub && age >= ageAllow) {
    console.log("You can enter the club");
    return true;

  } else {
    console.log("You cannot enter the club");
  }
};

bouncerControl(maxPeopleIntheClub,450, 20); // this returns:This is bigger than 100

*/

// FUNCTIONS 3 > RETURN function that PRODUCE something> Calculating the average

let points = [4, 3.1, 4, 10, 4.5];

finalAverage = 0;

const calculateAverage = (arr) => {
  //arr is an object used here as a parameter of the function calculateAverage

  const reducer = (total, n) => total + Math.round(n); //this is a function
  finalAverage = arr.reduce(reducer);
  //console.log(finalAverage);
  return finalAverage;
};

calculateAverage(points); // this returns:
console.log(finalAverage); // this returns:
