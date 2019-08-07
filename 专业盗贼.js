/*
你是一个盗窃专家，某一天晚上你要去盗窃某一条街道的一排房子。这些房子都有相连的防盗系统，如果你把相邻的两家都偷了那么就会触发报警器。

用一个数组来表示这些房子的金钱数量，请你完成 rob 函数，计算出在不触发报警器的情况下最多能偷多少钱。例如：

rob([1, 2, 3]) // => 4
rob([480,432,442,181,25,348,13,306,93,65]) // => 1641
*/

// 思路：
// 若第 n 个数不在结果集中，则rob(n位数组) === rob(n-1位数组)
// 若第 n 个数在结果集中，则rob(n位数组) === rob(n-2位数组) + nums[n]
const rob = (nums) => {
  const len = nums.length;
  if (len < 1) {
    return 0;
  } else if (len === 1) {
    return nums[0];
  } else if (len === 2) {
    return Math.max(...nums);
  }

  const temNum1 = nums.slice(0, -1);
  const temNum2 = nums.slice(0, -2);

  if(rob(temNum1) > rob(temNum2) + nums[nums.length - 1]) {
    return rob(temNum1)
  } else {
    return rob(temNum2) + nums[nums.length - 1]
  }
}
