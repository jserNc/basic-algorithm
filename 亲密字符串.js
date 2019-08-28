/*
给定两个由小写字母构成的字符串 A 和 B ，只要我们可以通过交换 A 中的两个字母得到与 B 相等的结果，就返回 true ；否则返回 false 。

 

示例 1：

输入： A = "ab", B = "ba"
输出： true
示例 2：

输入： A = "ab", B = "ab"
输出： false
示例 3:

输入： A = "aa", B = "aa"
输出： true
示例 4：

输入： A = "aaaaaaabc", B = "aaaaaaacb"
输出： true
示例 5：

输入： A = "", B = "aa"
输出： false
 

提示：

0 <= A.length <= 20000
0 <= B.length <= 20000
A 和 B 仅由小写字母构成。
*/

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {

  const len = A.length

  if (len < 2) {
    return false
  }

  if (B.length !== len) {
    return false
  }


  let diffChars = []
  let charCount = {}

  for (var i = 0; i < len; i++) {
    if (A[i] !== B[i]) {
      diffChars.push([A[i], B[i]])
    }
    if (!charCount[A[i]]) {
      charCount[A[i]] = 1
    } else {
      charCount[A[i]]++
    }
  }

  if (A === B && Object.values(charCount).find(c => c >= 2)) {
    return true
  }

  if (diffChars.length !== 2) {
    return false
  }

  if (diffChars[0][0] === diffChars[1][1] && diffChars[0][1] === diffChars[1][0]) {
    return true
  } else {
    return false
  }
};
