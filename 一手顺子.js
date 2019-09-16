/*
爱丽丝有一手（hand）由整数数组给定的牌。 

现在她想把牌重新排列成组，使得每个组的大小都是 W，且由 W 张连续的牌组成。

如果她可以完成分组就返回 true，否则返回 false。

 

示例 1：

输入：hand = [1,2,3,6,2,3,4,7,8], W = 3
输出：true
解释：爱丽丝的手牌可以被重新排列为 [1,2,3]，[2,3,4]，[6,7,8]。
示例 2：

输入：hand = [1,2,3,4,5], W = 4
输出：false
解释：爱丽丝的手牌无法被重新排列成几个大小为 4 的组。
 

提示：

1. 1 <= hand.length <= 10000
2. 0 <= hand[i] <= 10^9
3. 1 <= W <= hand.length
*/

/**
 * @param {number[]} hand
 * @param {number} W
 * @return {boolean}
 */
var isNStraightHand = function(hand, W) {
  const len = hand.length
  if (len % W !== 0) {
    return false
  }

  hand.sort((a, b) => a - b)

  let 当前最小的牌
  let 下一张的索引 = -1

  while(hand.length > 0) {
    当前最小的牌 = hand.splice(0, 1)[0]
    for (let i = 1; i < W; i++) {
      下一张的索引 = hand.findIndex(n => n === 当前最小的牌 + 1)
      if (下一张的索引 > -1) {
        当前最小的牌++
        hand.splice(下一张的索引, 1)
      } else {
        return false
      }
    }
  }

  return true
};
