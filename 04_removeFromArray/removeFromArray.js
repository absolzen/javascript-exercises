const removeFromArray = function(array, ...args) {

  // const array = arg;
  // const arrayOfArgs = args;
  
  for (const arg of args) {
    array = array.filter((arrayValue) => arrayValue !== arg);
  }

  return array;
  
};

// Do not edit below this line
module.exports = removeFromArray;
