/*
在无限的整数序列 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...中找到第 n 个数字。

注意:
n 是正数且在32为整形范围内 ( n < 231)。

示例 1:

输入:
3

输出:
3
示例 2:

输入:
11

输出:
0

说明:
第11个数字在序列 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... 里是0，它是10的一部分。
*/

/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
  if (n < 10) {
    return n
  }

  let sum = 0;
  let i = 1;
  let pow = 1

  while(sum < n) {
    if (i < 10 ** pow) {
      sum += pow
    } else {
      pow += 1
      sum += pow
    }

    let r = i.toString()[pow - (sum - n) - 1]
    if (r) {
      return Number(r)
    }

    i++
  }
};
