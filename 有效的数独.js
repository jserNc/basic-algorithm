/*
判断一个 9x9 的数独是否有效。只需要根据以下规则，验证已经填入的数字是否有效即可。

数字 1-9 在每一行只能出现一次。
数字 1-9 在每一列只能出现一次。
数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。


数独部分空格内已填入了数字，空白格用 '.' 表示。

示例 1:

输入:
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
输出: true
示例 2:

输入:
[
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
输出: false
解释: 除了第一行的第一个数字从 5 改为 8 以外，空格内其他数字均与 示例1 相同。
     但由于位于左上角的 3x3 宫内有两个 8 存在, 因此这个数独是无效的。


说明:

一个有效的数独（部分已被填充）不一定是可解的。
只需要根据以上规则，验证已经填入的数字是否有效即可。
给定数独序列只包含数字 1-9 和字符 '.' 。
给定数独永远是 9x9 形式的。
*/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const rows = board.length
  const columns = board[0].length
  let tempColumn
  let gridMap = new Map()
  let gridKey

  for (let row = 0; row < rows; row++) {
    if (hasSameNumber(board[row])) {
      return false
    }
  }

  for (let column = 0; column < columns; column++) {
    tempColumn = []
    for (let row = 0; row < rows; row++) {
      tempColumn.push(board[row][column])
      gridKey = `${~~(row / 3)}_${~~(column /3)}`
      if (gridMap.has(gridKey)) {
        gridMap.get(gridKey).push(board[row][column])
      } else {
        gridMap.set(gridKey, [board[row][column]])
      }
    }
    if (hasSameNumber(tempColumn)) {
      return false
    }
  }

  for (let grid of gridMap.values()) {
    if (hasSameNumber(grid)) {
      return false
    }
  }

  return true
};

function hasSameNumber(arr) {
  const _arr = arr.filter(e => e !== '.')
  return _arr.length > new Set(_arr).size
}
