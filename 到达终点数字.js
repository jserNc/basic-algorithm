/*
在一根无限长的数轴上，你站在0的位置。终点在target的位置。

每次你可以选择向左或向右移动。第 n 次移动（从 1 开始），可以走 n 步。

返回到达终点需要的最小移动次数。

示例 1:

输入: target = 3
输出: 2
解释:
第一次移动，从 0 到 1 。
第二次移动，从 1 到 3 。
示例 2:

输入: target = 2
输出: 3
解释:
第一次移动，从 0 到 1 。
第二次移动，从 1 到 -1 。
第三次移动，从 -1 到 2 。
注意:

target是在[-10^9, 10^9]范围中的非零整数。

                          0
                 1               -1
            2        -2      2        -2
          3  -3    3  -3   3  -3    3  -3
          ...
*/

var reachNumber = function(target) {
  if (target < 0) {
    return reachNumber(target * -1)
  }

  var sums = [0]
  var newSums = []
  var n = 0

  while(!sums.includes(target)) {
    n++
    newSums = []

    sums.forEach(sum => {
      if (sum >= target * -1 && sum <= target) {
        newSums.push(sum + n)
        newSums.push(sum - n)
      }
    })

    sums = [...new Set(newSums)]
  }

  return n
}
