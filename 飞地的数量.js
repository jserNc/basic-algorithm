/*
给出一个二维数组 A，每个单元格为 0（代表海）或 1（代表陆地）。

移动是指在陆地上从一个地方走到另一个地方（朝四个方向之一）或离开网格的边界。

返回网格中无法在任意次数的移动中离开网格边界的陆地单元格的数量。

 

示例 1：

输入：[[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]
输出：3
解释：
有三个 1 被 0 包围。一个 1 没有被包围，因为它在边界上。
示例 2：

输入：[[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]
输出：0
解释：
所有 1 都在边界上或可以到达边界。
 

提示：

1. 1 <= A.length <= 500
2. 1 <= A[i].length <= 500
3. 0 <= A[i][j] <= 1
4. 所有行的大小都相同
*/

/**
 * @param {number[][]} A
 * @return {number}
 */
var initEnclaves = function(A) {
  const rows = A.length
  const columns = A[0].length

  // 最上面的行
  for (var column = 0; column < columns; column++) {
    if (A[0][column] === 1) {
      A[0][column] = true
    }
  }

  // 最左边的列
  for (var row = 0; row < rows; row++) {
    if (A[row][0] === 1) {
      A[row][0] = true
    }
  }

  // 最下面的行
  for (var column = 0; column < columns; column++) {
    if (A[rows-1][column] === 1) {
      A[rows-1][column] = true
    }
  }

  // 最边的列
  for (var row = 0; row < rows; row++) {
    if (A[row][columns-1] === 1) {
      A[row][columns-1] = true
    }
  }
}

var getRemainGrids = function(grid) {
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
        if (grid[r][c+1] === true || grid[r][c-1] === true || (grid[r-1] && (grid[r-1][c] === true)) || (grid[r+1] && (grid[r+1][c] === true))) {
          _grid[r][c] = true
        }
      }
    }
  }
  return [freshNum, _grid]
}

var numEnclaves = function(grid) {
  let 当前不是飞地的陆地数
  let 再次经过遍历后不是飞地的陆地数
  let _grid = grid.slice()

  initEnclaves(_grid)

  while(([再次经过遍历后不是飞地的陆地数, _grid] = getRemainGrids(_grid))[0] !== 0) {
    if (再次经过遍历后不是飞地的陆地数 === 当前不是飞地的陆地数 && 当前不是飞地的陆地数 !== 0) {
      break
    }
    当前不是飞地的陆地数 = 再次经过遍历后不是飞地的陆地数
  }

  return 再次经过遍历后不是飞地的陆地数
};
