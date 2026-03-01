const findTheOldest = function(array) {
const currentYear = new Date().getFullYear();
// const result = array.sort((a,b) => {
//     const ageA = ((a.yearOfDeath || currentYear)  - a.yearOfBirth)
//     const ageB = ((b.yearOfDeath || currentYear) - b.yearOfBirth)
//     return ageB - ageA;
// });
// return result[0];

return array.reduce((oldest, current) => {
    const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
    const currentAge = (current.yearOfDeath || currentYear) - current.yearOfBirth;
    return currentAge > oldestAge ? current : oldest;
});
};

// Do not edit below this line
module.exports = findTheOldest;
