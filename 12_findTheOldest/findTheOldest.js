const findTheOldest = function (peopleList) {

    return peopleList.reduce((oldestPerson, currentPerson) => {
        let oldestPersonAge = calculateAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
        let currentPersonAge = calculateAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        if (oldestPersonAge < currentPersonAge) {
            return currentPerson;
        } else {
            return oldestPerson;
        }

    });


};
const calculateAge = function (yob, yod) {
    if (!yod) {
        yod = new Date().getFullYear();
    }
    return yod - yob;
}
// Do not edit below this line
module.exports = findTheOldest;
