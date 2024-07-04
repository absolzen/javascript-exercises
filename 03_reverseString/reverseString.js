const reverseString = function(word) {
  const chars = word.split(''); // Array of chars
  let reversedWord = chars.reverse().join('');
  return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;
