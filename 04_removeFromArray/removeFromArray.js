const removeFromArray = function (array) {
    const args = Array.prototype.slice.call(arguments, 1);

    for (let i = 0; i < array.length; i++) {
        if (array[i] === args[0]) {
            resultArray = array.slice(0, i).concat(array.slice(i + 1))
        }
    }

    return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;
