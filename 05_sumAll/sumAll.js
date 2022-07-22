const sumAll = function (number1, number2) {
    let sum = 0;
    let numbers = [number1, number2].sort();
    if (numbers[0] < 0 || typeof number1 != "number" || typeof number2 != "number") {
        return 'ERROR';
    }

    for (let i = numbers[0]; i <= numbers[1]; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
