const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date){
    return 'Unable to determine the time of year!';
  }
  if (isNaN(date.getTime())){
    throw 'Error';
  }
  let season = date.getMonth();
  if (season === 11 || (season >= 0 && season <=1)){
    return 'winter';
  }
  if (season >= 2 && season <= 4){
    return 'spring';
  }
  if (season >= 5 && season <= 7){
    return 'summer';
  }
  if (season >= 8 && season <= 10){
    return 'autumn';
  }
};
