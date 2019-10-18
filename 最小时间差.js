/*
给定一个 24 小时制（小时:分钟）的时间列表，找出列表中任意两个时间的最小时间差并已分钟数表示。


示例 1：

输入: ["23:59","00:00"]
输出: 1

备注:

1. 列表中时间数在 2~20000 之间。
2. 每个时间取值在 00:00~23:59 之间。
*/

/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
  const oneDay = 24 * 60
  const time2Minutes = (time) => {
    const [hours, minutes] = time.split(':').map(n => +n)
    return hours * 60 + minutes
  }

  const mins = timePoints.map(t => time2Minutes(t)).sort((a, b) => a - b)

  let 最小时间差 = Infinity
  let diff

  for (var i = 1, len = mins.length; i < len; i++) {
    diff = mins[i] - mins[i - 1]
    if (diff < 最小时间差) {
      最小时间差 = diff
    }
  }

  return Math.min(最小时间差, mins[0] + oneDay - mins[len - 1])
};
