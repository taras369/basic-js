const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(value = true) {
    this.value = value;
  }
  
  encrypt(message, key) {
    if (!message || !key) {throw new Error();}
    let splitM = message.toLowerCase().split(''),
        splitK = key.toLowerCase(),
        flag = 0,
        result = [];
    
    while (splitM.length > splitK.length) {splitK += splitK;}
  
    splitK = splitK.split('');

    for (let j of splitM) {
      if (/[a-z]/i.test(j)) {
        result.push(String.fromCharCode((((j.charCodeAt(0) - 97) + (splitK[flag++].charCodeAt(0) - 97)) % 26) + 97).toUpperCase());
      } else {
        result.push(j);
      }
    }
    if (this.value) {
      return result.join('');
    } else {
      return result.reverse().join('');
    }
  }    
     

  decrypt(message, key) {
    if (!message || !key) {throw new Error();}
    let splitM = message.toLowerCase().split(''),
        splitK = key.toLowerCase(),
        flag = 0,
        result = [];
    
    while (splitM.length > splitK.length) {splitK += splitK;}
  
    splitK = splitK.split('');

    for (let j of splitM) {
      if (/[a-z]/i.test(j)) {
        result.push(String.fromCharCode((((j.charCodeAt(0) - 97) + (26 - (splitK[flag++].charCodeAt(0) - 97))) % 26) + 97).toUpperCase());
      } else {
        result.push(j);
      }
    }
    if (this.value) {
      return result.join('');
    } else {
      return result.reverse().join('');
    }
  }    
}

module.exports = VigenereCipheringMachine;
