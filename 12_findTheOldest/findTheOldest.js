const findTheOldest = function(arr) {
  const currentYear = new Date().getFullYear();

  arr.sort((a, b) => {
    if (a.yearOfDeath === undefined) a.yearOfDeath = currentYear;
    if (b.yearOfDeath === undefined) b.yearOfDeath = currentYear;
    aAge = a.yearOfDeath - a.yearOfBirth;
    bAge = b.yearOfDeath - b.yearOfBirth;
    return bAge - aAge;
  });

  return arr[0];

  // test('finds the person with the greatest age!', () => {
  //   const people = [
  //     {
  //       name: "Carly",
  //       yearOfBirth: 1942,
  //       yearOfDeath: 1970,
  //     },
  //     {
  //       name: "Ray",
  //       yearOfBirth: 1962,
  //       yearOfDeath: 2011,
  //     },
  //     {
  //       name: "Jane",
  //       yearOfBirth: 1912,
  //       yearOfDeath: 1941,
  //     },
  //   ]
  //   expect(findTheOldest(people).name).toBe('Ray');
};

// Do not edit below this line
module.exports = findTheOldest;
