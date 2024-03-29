/*
在给定的网格中，每个单元格可以有以下三个值之一：

值 0 代表空单元格；
值 1 代表新鲜橘子；
值 2 代表腐烂的橘子。
每分钟，任何与腐烂的橘子（在 4 个正方向上）相邻的新鲜橘子都会腐烂。

返回直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回 -1。

 

示例 1：



输入：[[2,1,1],[1,1,0],[0,1,1]]
输出：4
示例 2：

输入：[[2,1,1],[0,1,1],[1,0,1]]
输出：-1
解释：左下角的橘子（第 2 行， 第 0 列）永远不会腐烂，因为腐烂只会发生在 4 个正向上。
示例 3：

输入：[[0,2]]
输出：0
解释：因为 0 分钟时已经没有新鲜橘子了，所以答案就是 0 。
 

提示：

1. 1 <= grid.length <= 10
2. 1 <= grid[0].length <= 10
3. grid[i][j] 仅为 0、1 或 2
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var getRemainFreshOranges = function(grid) {
  const rows = grid.length
  const columns = grid[0].length
  let freshNum = 0
  const _grid = new Array(rows)

  for (var r = 0; r < rows; r++) {
    _grid[r] = []
    for (var c = 0; c < columns; c++) {
      _grid[r][c] = grid[r][c]
      if (grid[r][c] === 1) {
        freshNum++
        if (grid[r][c+1] === 2 || grid[r][c-1] === 2 || (grid[r-1] && (grid[r-1][c] === 2)) || (grid[r+1] && (grid[r+1][c] === 2))) {
          _grid[r][c] = 2
        }
      }
    }
  }
  return [freshNum, _grid]
}

var orangesRotting = function(grid) {
  let minute = 0
  let 当前新鲜橘子个数
  let 一分钟后新鲜橘子个数
  let _grid = grid.slice()

  while(([一分钟后新鲜橘子个数, _grid] = getRemainFreshOranges(_grid))[0] !== 0) {
    if (一分钟后新鲜橘子个数 === 当前新鲜橘子个数 && 当前新鲜橘子个数 !== 0) {
      return -1
    }
    minute++
    当前新鲜橘子个数 = 一分钟后新鲜橘子个数
  }

  return minute
};
