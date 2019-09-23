/*
给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

示例 1:

输入: coins = [1, 2, 5], amount = 11
 解释: 11 = 5 + 5 + 1
示例 2:

输入: coins = [2], amount = 3
输出: -1
说明:
你可以认为每种硬币的数量是无限的。
*/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  if (amount === 0) {
    return 0
  }
  const 比目标小的金币集合 = coins.filter(c => c <= amount)
  if (比目标小的金币集合.length === 0) {
    return -1
  }

  比目标小的金币集合.sort((a, b) => b - a)

  let count = 0

  for (var i = 0; i < 比目标小的金币集合.length; i++) {
    if (amount % 比目标小的金币集合[i] === 0) {
      return amount / 比目标小的金币集合[i]
    }
    if ((count = coinChange(coins, amount - 比目标小的金币集合[i])) > -1) {
      return count + 1
    }
  }

  return -1
};
