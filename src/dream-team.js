const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  
  if (typeof(members) === 'number' || typeof(members) === 'boolean' || !members || Array.isArray(members) === false) {
    return false;
  } 
  
  if (members == []) {
      throw new UserException("error");
    }
   
  let k = '';

  members.forEach(elem => {
    if (typeof(elem) === 'number' || typeof(elem) === 'boolean' || typeof(elem) === 'object' || elem === null || elem === undefined) {

          return false;
    } else {
      k += elem.trim().toUpperCase().replace(/\s+/g, '').split('').slice(0,1).join('');
    };
      });

  let result = k.split('').sort().join('');
  
  return result;
};
