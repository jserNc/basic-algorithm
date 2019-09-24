/*
你的面前有一堵方形的、由多行砖块组成的砖墙。 这些砖块高度相同但是宽度不同。你现在要画一条自顶向下的、穿过最少砖块的垂线。

砖墙由行的列表表示。 每一行都是一个代表从左至右每块砖的宽度的整数列表。

如果你画的线只是从砖块的边缘经过，就不算穿过这块砖。你需要找出怎样画才能使这条线穿过的砖块数量最少，并且返回穿过的砖块数量。

你不能沿着墙的两个垂直边缘之一画线，这样显然是没有穿过一块砖的。

 

示例：

输入: [[1,2,2,1],
      [3,1,2],
      [1,3,2],
      [2,4],
      [3,1,2],
      [1,3,1,1]]

输出: 2
*/

/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
  const 缝隙次数统计 = {}

  wall.map(row => {
    const 缝隙 = []
    for (var i = 0; i < row.length - 1; i++) {
      缝隙.push((缝隙[缝隙.length - 1] || 0) + row[i])
    }
    return 缝隙
  }).forEach(row => {
    row.forEach(c => {
      缝隙次数统计[c] = (缝隙次数统计[c] || 0) + 1
    })
  })

  return wall.length - Math.max(0, ...Object.values(缝隙次数统计))
};
