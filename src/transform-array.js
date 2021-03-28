const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!arr){
    throw 'Error';
  }
  let arr_two = [];
  for (let i = 0; i < arr.length; i++){
    arr_two.push(arr[i]);
    if(arr[i] == '--discard-next'){
      arr_two.pop();
    }

    if (arr[i] == '--discard-prev'){
      arr_two.pop();
    }
    if (arr[i] == '--double-next'){
      arr_two.pop();
    }
    if (arr[i] == '--double-prev'){
      arr_two.pop();
    }
  }
  return arr_two;
};
