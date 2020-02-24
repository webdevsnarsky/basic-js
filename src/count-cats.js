module.exports = function countCats(matrix) {
  let count = 0;
  matrix.forEach(elem => elem.forEach(item => (item === '^^') ? count++ : count));
  return count;
};
