const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)){
    return false;
  }
  let one = members.filter((word) => typeof (word) == 'string');
  let two = one.map(word => word.trim());
  let three = two.map(word => word[0].toUpperCase());
  let result = three.sort().join('');
  return result;
};
