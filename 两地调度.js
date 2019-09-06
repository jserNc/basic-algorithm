/*
公司计划面试 2N 人。第 i 人飞往 A 市的费用为 costs[i][0]，飞往 B 市的费用为 costs[i][1]。

返回将每个人都飞到某座城市的最低费用，要求每个城市都有 N 人抵达。

 

示例：

输入：[[10,20],[30,200],[400,50],[30,20]]
输出：110
解释：
第一个人去 A 市，费用为 10。
第二个人去 A 市，费用为 30。
第三个人去 B 市，费用为 50。
第四个人去 B 市，费用为 20。

最低总费用为 10 + 30 + 50 + 20 = 110，每个城市都有一半的人在面试。
 

提示：

1. 1 <= costs.length <= 100
2. costs.length 为偶数
3. 1 <= costs[i][0], costs[i][1] <= 1000
*/

/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
  const _costs = costs.slice()
  _costs.sort((cost1, cost2) => {
    if (Math.abs(cost1[1] - cost1[0]) > Math.abs(cost2[1] - cost2[0])) {
      return -1
    } else {
      return 1
    }
  })

  let countA = 0
  let countB = 0
  let 每个城市目标人数 = costs.length / 2
  let 总费用 = 0

  for (let cost of _costs) {
    if (countA === 每个城市目标人数) {
      总费用 += cost[1]
    } else if (countB === 每个城市目标人数) {
      总费用 += cost[0]
    } else {
      if (cost[0] < cost[1]) {
        总费用 += cost[0]
        countA++
      } else {
        总费用 += cost[1]
        countB++
      }
    }
  }

  return 总费用
};
