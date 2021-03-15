
module.exports = function countCats(matrix) {
  let count = 0;
  if (!matrix || matrix.length < 1) {
    return 0;
  } else {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++){
        if (matrix[i][j] === '^^') {
          count++;
        }
      }
    }
    return count;
  } 
};