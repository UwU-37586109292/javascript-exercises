const fibonacci = function (number) {
    number = parseInt(number);
    let fibCurrent = 1;
    let fibPrev = 1;
    let temp;
    if (number > 0) {
        for (let i = 1; i <= number - 2; i++) {
            temp = fibCurrent;
            fibCurrent = fibCurrent + fibPrev;
            fibPrev = temp;
        }
        return fibCurrent;
    }
    else return "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
