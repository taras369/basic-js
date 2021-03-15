const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  } 
  try {
    date.getTime();
    let season = '';
    let month = date.getMonth() + 1;
    if ((month >= 1 && month <= 2) || month == 12) {season = 'winter';}
    if (month >= 3 && month <= 5) {season = 'spring';}
    if (month >= 6 && month <= 8) {season = 'summer';}
    if (month >= 9 && month <=11) {season = 'autumn';}
    return season;
  } catch(error) {
    throw new Error(error);
  }
};
