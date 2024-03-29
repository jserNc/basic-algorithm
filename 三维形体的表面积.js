/*
在 N * N 的网格上，我们放置一些 1 * 1 * 1  的立方体。

每个值 v = grid[i][j] 表示 v 个正方体叠放在对应单元格 (i, j) 上。

请你返回最终形体的表面积。

 

示例 1：

输入：[[2]]
输出：10
示例 2：

输入：[[1,2],[3,4]]
输出：34
示例 3：

输入：[[1,0],[0,2]]
输出：16
示例 4：

输入：[[1,1,1],[1,0,1],[1,1,1]]
输出：32
示例 5：

输入：[[2,2,2],[2,1,2],[2,2,2]]
输出：46
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
  const N = grid.length
  let 表面积 = 0

  for (let row = 0; row < N; row++) {
    for (let column = 0; column < N; column++) {
      if (grid[row][column] > 0) {
        表面积 += 2
      }

      // 上
      if ((grid[row-1] && grid[row-1][column] < grid[row][column])) {
        表面积 += grid[row][column] - grid[row-1][column]
      }
      if (!grid[row-1]) {
        表面积 += grid[row][column]
      }

      // 下
      if ((grid[row+1] && grid[row+1][column] < grid[row][column])) {
        表面积 += grid[row][column] - grid[row+1][column]
      }
      if (!grid[row+1]) {
        表面积 += grid[row][column]
      }

      // 左
      if (grid[row][column-1] < grid[row][column]) {
        表面积 += grid[row][column] - grid[row][column-1]
      }
      if (grid[row][column-1] === undefined) {
        表面积 += grid[row][column]
      }

      // 右
      if (grid[row][column+1] < grid[row][column]) {
        表面积 += grid[row][column] - grid[row][column+1]
      }
      if (grid[row][column+1] === undefined) {
        表面积 += grid[row][column]
      }
    }
  }

  return 表面积
};
