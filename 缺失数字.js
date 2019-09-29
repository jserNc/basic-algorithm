/*
给定一个包含 0, 1, 2, ..., n 中 n 个数的序列，找出 0 .. n 中没有出现在序列中的那个数。

示例 1:

输入: [3,0,1]
输出: 2
示例 2:

输入: [9,6,4,2,3,5,7,0,1]
输出: 8
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let sum = 0
  for (var i = 1; i <= nums.length; i++) {
    sum += (i - nums[i - 1])
  }
  return sum
};
