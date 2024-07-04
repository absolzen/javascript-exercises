const removeFromArray = function(array, ...args) {

  function isInArray(arrayValue) { // arrayValue = 1
    for (const arg of args) { // arg = 3
      if (arg === arrayValue) {
        return false; // returns false if argument 
      } else {
        return true;
      }
    }
  }
  
  const newArray = array.filter(isInArray);
  
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
