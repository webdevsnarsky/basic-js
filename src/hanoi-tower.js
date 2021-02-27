const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let result = {};

    diskTurns = (2 ** disksNumber) - 1;
    result.turns = diskTurns;

    diskSpeed = diskTurns / (turnsSpeed / 3600);
    result.seconds = diskSpeed;

    return result;
    
}
