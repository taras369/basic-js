const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let result = 1;
    arr.forEach(element => {
      if (Array.isArray(element)) {
        let depth = this.calculateDepth(element) + 1;
        if (depth > result) {result = depth;}
      }
    });
    return result;
  }
};