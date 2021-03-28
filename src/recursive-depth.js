const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr){
    let result = 1;
    for (let item of arr){
        if(Array.isArray(item)){
            let a = 1 + this.calculateDepth(item);
            result = (result > a) ? result : a;
        }
    }
    return result;        
    }
};