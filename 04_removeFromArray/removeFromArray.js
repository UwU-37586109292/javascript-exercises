const removeFromArray = function (array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return array.slice(0, i).concat(array.slice(i + 1))
        }
    }

};

// Do not edit below this line
module.exports = removeFromArray;
