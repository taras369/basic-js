const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if(Array.isArray(arr)){
    let result = [],
        i = 0;
    for (i; i < arr.length; i++) {
      switch (arr[i]) {
        case '--discard-next':
          i++;
          break;
        case '--discard-prev':
          (result.length && arr[i - 2] != '--discard-next') ? result.pop() : result;
          break;
        case '--double-prev':
          (arr [i - 2] != '--discard-next' && i > 0) ? result.push(arr[i - 1]) : result;
          break;
        case '--double-next':
          (i < arr.length -1) ? result.push(arr[i + 1]) : result;
          break;
        default:
          result.push(arr[i]);
      }
    }
    return result;
  } else throw new Error();
};
