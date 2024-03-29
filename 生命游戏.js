/*
根据百度百科，生命游戏，简称为生命，是英国数学家约翰·何顿·康威在1970年发明的细胞自动机。

给定一个包含 m × n 个格子的面板，每一个格子都可以看成是一个细胞。每个细胞具有一个初始状态 live（1）即为活细胞， 或 dead（0）即为死细胞。每个细胞与其八个相邻位置（水平，垂直，对角线）的细胞都遵循以下四条生存定律：

1. 如果活细胞周围八个位置的活细胞数少于两个，则该位置活细胞死亡；
2. 如果活细胞周围八个位置有两个或三个活细胞，则该位置活细胞仍然存活；
3. 如果活细胞周围八个位置有超过三个活细胞，则该位置活细胞死亡；
4. 如果死细胞周围正好有三个活细胞，则该位置死细胞复活；


根据当前状态，写一个函数来计算面板上细胞的下一个（一次更新后的）状态。下一个状态是通过将上述规则同时应用于当前状态下的每个细胞所形成的，其中细胞的出生和死亡是同时发生的。

示例:

输入:
[
  [0,1,0],
  [0,0,1],
  [1,1,1],
  [0,0,0]
]
输出:
[
  [0,0,0],
  [1,0,1],
  [0,1,1],
  [0,1,0]
]
*/

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  const rows = board.length
  const columns = board[0].length
  const nextStatus = []

  for (var row = 0; row < rows; row++) {
    nextStatus[row] = []
    for (var column = 0; column < columns; column++) {
      nextStatus[row][column] = toggleLife(row, column, board)
    }
  }

  return board = nextStatus
};

var toggleLife = function(i, j, board) {
  const 周围细胞状态 = [board[i][j-1], board[i][j+1]]
  if (board[i-1]) {
    周围细胞状态.push(board[i-1][j-1], board[i-1][j], board[i-1][j+1])
  }
  if (board[i+1]) {
    周围细胞状态.push(board[i+1][j-1], board[i+1][j], board[i+1][j+1])
  }

  const 周围活细胞数 = 周围细胞状态.filter(s => s === 1).length
  console.log('周围活细胞数:', 周围活细胞数)

  if (board[i][j] === 1) {
    if (周围活细胞数 < 2) {
      return 0
    }
    if (周围活细胞数 === 2 || 周围活细胞数 === 3) {
      return 1
    }
    if (周围活细胞数 > 3) {
      return 0
    }
  } else {
    if (周围活细胞数 === 3) {
      return 1
    } else {
      return 0
    }
  }
}


[
  [0,1,0],
  [0,0,1],
  [1,1,1],
  [0,0,0]
]
