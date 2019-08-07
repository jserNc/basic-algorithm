/*
给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。

注意：

答案中不可以包含重复的四元组。

示例：

给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。

满足要求的四元组集合为：
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  var result = [];
  var tempArr = [];
  var temRsult = [];

  var twoSum = function(nums, target) {
    var result = [];
    for (var i = 0, len = nums.length; i < len - 1; i++) {
      for (var j = i + 1; j < len; j++) {
        if (nums[i] + nums[j] === target) {
          result.push([nums[i], nums[j]])
        }
      }
    }
    return result;
  };

  for (var i = 0, len = nums.length; i < len - 1; i++) {
    for (var j = i + 1; j < len; j++) {
      tempArr = nums.slice();
      tempArr.splice(i, 1);
      tempArr.splice(j - 1, 1);
      temRsult = twoSum(tempArr, target - nums[i] - nums[j]);
      if (temRsult.length > 0) {
        result.push.apply(result, temRsult.map(a => { return a.concat(nums[i], nums[j]) }))
      }
    }
  }

  var unique = function(result) {
    var uniqueResult = [];
    var map = {};
    var str = '';
    var temArr = [];
    result.forEach(arr => {
      temArr = arr.slice().sort((a, b) => {
        if (a - b < 0) {
          return -1
        }
        if (a - b > 0) {
          return 1
        }
        return 0
      })
      str = temArr.toString()
      if (!map[str]) {
        map[str] = 1;
        uniqueResult.push(arr)
      }
    })
    return uniqueResult
  }

  return unique(result);
};
