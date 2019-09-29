/*
给定一组非负整数，重新排列它们的顺序使之组成一个最大的整数。

示例 1:

输入: [10,2]
输出: 210
示例 2:

输入: [3,30,34,5,9]
输出: 9534330
说明: 输出结果可能非常大，所以你需要返回一个字符串而不是整数。
*/

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  const 比较大小 = (n1, n2) => {
    let index = 0

    if (n1 === n2) {
      return 0
    }

    while (n1[index] === n2[index] && n1[index] !== undefined) {
      index++
    }

    if (n1[index] === undefined) {
      return 1
    }
    if (n2[index] === undefined) {
      return -1
    }
    return +n2[index] - +n1[index]
  }

  const result =  nums.sort((n1, n2) => {
    return 比较大小(n1 + '' + n2, n2 + '' + n1)
  }).join('')

  return +result === 0 ? '0' : result
};
