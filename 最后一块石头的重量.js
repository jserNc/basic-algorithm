/*
有一堆石头，每块石头的重量都是正整数。

每一回合，从中选出两块最重的石头，然后将它们一起粉碎。假设石头的重量分别为 x 和 y，且 x <= y。那么粉碎的可能结果如下：

如果 x == y，那么两块石头都会被完全粉碎；
如果 x != y，那么重量为 x 的石头将会完全粉碎，而重量为 y 的石头新重量为 y-x。
最后，最多只会剩下一块石头。返回此石头的重量。如果没有石头剩下，就返回 0。


提示：

1. 1 <= stones.length <= 30
2. 1 <= stones[i] <= 1000
*/

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  if (stones.length === 1) {
    return stones[0]
  }
  const _stones = stones.slice()
  _stones.sort((a, b) => b - a)

  let diff
  let index

  while (_stones.length > 1) {
    diff = _stones[0] - _stones[1]
    _stones.splice(0, 2)

    index = _stones.findIndex(stone => diff >= stone)

    if (index === -1) {
      _stones.push(diff)
    } else {
      _stones.splice(index, 0, diff)
    }
  }

  return _stones[0]
};
