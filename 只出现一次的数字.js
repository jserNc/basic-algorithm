/*
给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现了三次。找出那个只出现了一次的元素。

说明：

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

示例 1:

输入: [2,2,3,2]
输出: 3
示例 2:

输入: [0,1,0,1,0,1,99]
输出: 99
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const map = {};
    const results = [];
    let num = null;

    for (let i = 0, len = nums.length; i < len; i++) {
      num = nums[i];


      if (map[num] == undefined) {
        results.push(num);
        map[num] = results.length - 1;
      } else {
        results[map[num]] = ''
        map[num] = ''
      }
    }

    return Number(results.join(''))
};
