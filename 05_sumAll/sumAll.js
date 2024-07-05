const sumAll = function(num1, num2) {

  let sum = 0;

  if (num1 > num2) { // reverse nums 
    let numTemp; 
    numTemp = num1;
    num1 = num2;
    num2 = numTemp;
  }

  for (let i = num1; i <= num2; i++) {
    sum += i;
  }

  return sum;

};

// Do not edit below this line
module.exports = sumAll;
