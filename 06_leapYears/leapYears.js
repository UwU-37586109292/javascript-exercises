const leapYears = function (yearToCheck) {

    return (yearToCheck % 4 === 0) && (yearToCheck % 100 !== 0 || yearToCheck % 400 === 0);

};

// Do not edit below this line
module.exports = leapYears;
