/*
给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

案例:

s = "leetcode"
返回 0.

s = "loveleetcode",
返回 2.
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const sArr = s.split('')
  for (var i = 0; i < s.length; i++) {
    if (sArr.find((c, index) => c === s[i] && index !== i)) {
      continue
    } else {
      return i
    }
  }

  return -1
};
