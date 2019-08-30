/*
给定一个非负整数数组 A，返回一个数组，在该数组中， A 的所有偶数元素之后跟着所有奇数元素。

你可以返回满足此条件的任何数组作为答案。

 

示例：

输入：[3,1,2,4]
输出：[2,4,3,1]
输出 [4,2,3,1]，[2,4,1,3] 和 [4,2,1,3] 也会被接受。
 

提示：

1 <= A.length <= 5000
0 <= A[i] <= 5000
*/

/**
 * @param {number[]} A
 * @return {number[]}
 */

var sortArrayByParity = function(A) {
  const _A = []

  for (let a of A) {
    if (a % 2 === 0) {
      _A.unshift(a)
    } else {
      _A.push(a)
    }
  }

  return _A
};

var sortArrayByParity = function(A) {
  const _A = [...A]
  return _A.sort((a, b) => {
    if (a % 2 === 0) {
      if (b % 2 === 0) {
        return 0
      } else {
        return -1
      }
    } else {
      return 1
    }
  })
};
