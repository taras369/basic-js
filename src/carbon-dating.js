
const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string" || !Number(sampleActivity) || sampleActivity < 0 || sampleActivity > 15 ) {
    return false;
  } 
    let result = Math.ceil((Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity))) / (Math.log(2) / HALF_LIFE_PERIOD));
    return result;
};
