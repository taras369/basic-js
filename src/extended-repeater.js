const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = String(str);

  if (String(options.addition) !== 'undefined') {
    options.addition = String(options.addition);
  } else { 
    options.addition = '';
  }
  if (options.separator === undefined) {
    options.separator = '+';
  } else {
    options.separator = options.separator;
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = '|';
  } else {
    options.additionSeparator = options.additionSeparator;
  }

  let result = '',
      addition = '';
      
  if (options.additionRepeatTimes) {
    for (let i = 1;i < options.additionRepeatTimes; i++) {
      addition += options.addition + options.additionSeparator;
    }
  }
  addition += options.addition;
  
  if (options.repeatTimes) {
    for (let i = 1; i <= options.repeatTimes; i++) {
      result += str + addition;
      if (i != options.repeatTimes) {
        result += options.separator;
      }
    }
  } else {
    result = str + addition;
  }
  return result;
};
  