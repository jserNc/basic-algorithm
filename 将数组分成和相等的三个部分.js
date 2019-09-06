/*
给定一个整数数组 A，只有我们可以将其划分为三个和相等的非空部分时才返回 true，否则返回 false。

形式上，如果我们可以找出索引 i+1 < j 且满足 (A[0] + A[1] + ... + A[i] == A[i+1] + A[i+2] + ... + A[j-1] == A[j] + A[j-1] + ... + A[A.length - 1]) 就可以将数组三等分。

 

示例 1：

输出：[0,2,1,-6,6,-7,9,1,2,0,1]
输出：true
解释：0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
示例 2：

输入：[0,2,1,-6,6,7,9,-1,2,0,1]
输出：false
示例 3：

输入：[3,3,6,5,-2,2,5,1,-9,4]
输出：true
解释：3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4
 

提示：

1. 3 <= A.length <= 50000
2. -10000 <= A[i] <= 10000
*/

/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
  let sum = A.reduce((s, n) => s + n, 0)

  if (sum % 3 !== 0) {
    return false
  }

  sum /= 3
  let 分组的和 = 0

  loop:
  for (let i = 0, len = A.length; i < len; i++) {
    分组的和 += A[i]
    if (分组的和 === sum) {
      分组的和 = 0
      if (i < len - 2) {
        for (let j = i + 1; j < len; j++) {
          分组的和 += A[j]
          if (分组的和 === sum) {
            if (j < len - 1) {
              return true
            } else {
              return false
            }
          }
        }
        return false
      } else {
        return false
      }

      break loop
    }
  }

  return false
};


var canThreePartsEqualSum = function(A) {
  let sum = A.reduce((s, n) => s + n, 0)

  if (sum % 3 !== 0) {
    return false
  }

  sum /= 3
  let 分组的和 = 0
  let 有效组的个数 = 0

  for (let i = 0, len = A.length; i < len; i++) {
    分组的和 += A[i]
    if (分组的和 === sum) {
      分组的和 = 0
      有效组的个数++
    }
  }

  return 有效组的个数 === 3
};
