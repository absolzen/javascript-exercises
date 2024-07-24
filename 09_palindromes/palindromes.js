const palindromes = function (str) {
  let strAlphaNumLower = str.replace(/[^a-zA-Z0-9]+/g, "").toLowerCase();
  let strRev = strAlphaNumLower.split("").reverse().join("");
  return strAlphaNumLower === strRev;
};

// Do not edit below this line
module.exports = palindromes;
