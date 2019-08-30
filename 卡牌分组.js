/*
给定一副牌，每张牌上都写着一个整数。

此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：

每组都有 X 张牌。
组内所有的牌上都写着相同的整数。
仅当你可选的 X >= 2 时返回 true。

 

示例 1：

输入：[1,2,3,4,4,3,2,1]
输出：true
解释：可行的分组是 [1,1]，[2,2]，[3,3]，[4,4]
示例 2：

输入：[1,1,1,2,2,2,3,3]
输出：false
解释：没有满足要求的分组。
示例 3：

输入：[1]
输出：false
解释：没有满足要求的分组。
示例 4：

输入：[1,1]
输出：true
解释：可行的分组是 [1,1]
示例 5：

输入：[1,1,2,2,2,2]
输出：true
解释：可行的分组是 [1,1]，[2,2]，[2,2]

提示：

1 <= deck.length <= 10000
0 <= deck[i] < 10000
*/

/**
 * @param {number[]} deck
 * @return {boolean}
 */
var canDiviedByX = function(arr, X) {
  const len = arr.length

  if (len % X !== 0) {
    return false
  }

  let currentValue
  let currentIndex
  let i = 0

  while (i < arr.length) {
    currentValue = arr[i]
    currentIndex = i

    while (i < currentIndex + X) {
      if (arr[i] !== currentValue) {
        return false
      }
      i++
    }
  }

  return true
}

var hasGroupsSizeX = function(deck) {
  const len = deck.length

  if (len < 2) {
    return false
  }

  const _deck = deck.slice()
  const countMap = {}
  _deck.sort((a, b) => a - b)

  for (let d of _deck) {
    if (countMap[d] === undefined) {
      countMap[d] = 1
    } else {
      countMap[d]++
    }
  }

  const counts = Object.values(countMap)
  const minCount = Math.min(...counts)

  let X = 2
  while (X <= minCount) {
    if (canDiviedByX(_deck, X)) {
      return true
    }
    X++
  }

  return false
}
