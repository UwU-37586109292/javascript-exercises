const removeFromArray = function (array) {
    const toBeDeletedList = Array.prototype.slice.call(arguments, 1);
    let resultArray = array;

    for (let i = 0; i < toBeDeletedList.length; i++) {
        for (let j = 0; j < resultArray.length; j++) {
            if (resultArray[j] === toBeDeletedList[i]) {
                resultArray = resultArray.slice(0, j).concat(resultArray.slice(j + 1));
                break;
            }
        }
    }

    return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;
