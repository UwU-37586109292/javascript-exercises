const leapYears = function (yearToCheck) {

    if (!(yearToCheck % 4 == 0)) {
        return false;
    } else if (yearToCheck % 100 == 0 && yearToCheck % 400 != 0) {
        return false;
    } else return true;


};

// Do not edit below this line
module.exports = leapYears;
