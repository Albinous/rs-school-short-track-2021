/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s3 = s1.split('');
  const s4 = s2.split('');
  let count = 0;
  for (let i = 0; i < s3.length; i++) {
    for (let j = 0; j < s4.length; j++) {
      if (s3[i] === s4[j]) {
        count++;
        const index = s4.indexOf(s4[j]);
        if (index > -1) {
          s4.splice(index, 1);
        }
        break;
      }
    }
  }
  return count;
}

module.exports = getCommonCharacterCount;
