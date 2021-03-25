const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let result = 0;
  arr.forEach(function(cat){
    for(let i = 0; i < cat.length; i++){
      if (cat[i] === '^^') {
        result++;
      }
    }
  });
  return result;
};
