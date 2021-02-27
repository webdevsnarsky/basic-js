const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let result = '';

  if (!date) {
    return 'Unable to determine the time of year!'
  }
  // check class of object
  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error;
  }

  let dateNow = date;
  
  if (dateNow.getMonth() <= 1 || dateNow.getMonth() == 11) {
    result = 'winter';
  } else if (dateNow.getMonth() >= 2 && dateNow.getMonth() <= 4) {
    result = 'spring';
  } else if (dateNow.getMonth() >= 5 && dateNow.getMonth() <= 7) {
    result = 'summer';
  } else {
    result = 'autumn';
  }

  return result;
  
}
