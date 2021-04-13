/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const newArr = [];
  const sortArr = arr.sort((a, b) => a - b).filter((item) => item !== -1);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < sortArr.length; j++) {
      if (arr[i] !== -1) {
        newArr.push(sortArr[j]);
        break;
      } else {
        newArr.push(-1);
      }
    }
  }
  return newArr;
}

module.exports = sortByHeight;
