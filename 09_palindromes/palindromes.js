const palindromes = function (string) {
    string = string.toLowerCase();
    let chars = /\s*\.*\,*\!*/g;
    string = string.replace(chars, '');
    stringReverse = string.split('').reverse().join('');
    console.log(string);
    console.log(stringReverse);
    return string === stringReverse;
}

// Do not edit below this line
module.exports = palindromes;
