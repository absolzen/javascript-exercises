const fibonacci = function(num) {
  num = +num;
  let arr = [0];
  if (num === 0) return arr[0];
  if (num < 0) return 'OOPS';

  arr.push(1);
  for (i = 1; i < num; i++) {
    let result = arr.slice(-2).reduce((sum, current) => sum + current);
    arr.push(result);
  }
  return +arr.slice(-1).toString();
};

// Do not edit below this line
module.exports = fibonacci;
