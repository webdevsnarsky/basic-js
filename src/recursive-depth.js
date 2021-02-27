const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr, count) {
        (!count) ? count = 1 : '';
       arr.forEach(element => {
        if (Array.isArray(element)) {
            count = Math.max(this.calculateDepth(element, count),count);
            count++;
        }

       });

       return count;
    }

};