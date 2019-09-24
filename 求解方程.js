/*
求解一个给定的方程，将x以字符串"x=#value"的形式返回。该方程仅包含'+'，' - '操作，变量 x 和其对应系数。

如果方程没有解，请返回“No solution”。

如果方程有无限解，则返回“Infinite solutions”。

如果方程中只有一个解，要保证返回值 x 是一个整数。

示例 1：

输入: "x+5-3+x=6+x-2"
输出: "x=2"
示例 2:

输入: "x=x"
输出: "Infinite solutions"
示例 3:

输入: "2x=x"
输出: "x=0"
示例 4:

输入: "2x+3x-6x=x+2"
输出: "x=-1"
示例 5:

输入: "x=x+2"
输出: "No solution"
*/

/**
 * @param {string} equation
 * @return {string}
 */
var solveEquation = function(equation) {
  const [left, right] = equation.split('=')

  const 左边的常数 = (left.match(/[+-]?\d+(?!([\d]?x))/g) || []).reduce((s, n) => s + +n, 0)
  const 右边的常数 = (right.match(/[+-]?\d+(?!([\d]?x))/g) || []).reduce((s, n) => s + +n, 0)

  const 左边的x系数 = (left.match(/[+-]?(\d+)?x/g) || []).reduce((s, nX) => {
    系数 = nX.slice(0, -1)

    if (系数 === '-') {
      return s - 1
    } else if (系数 === '0' || 系数 === '+0' || 系数 === '-0') {
      return s
    } else {
      return s + (+系数 || 1)
    }
  }, 0)

  const 右边的x系数 = (right.match(/[+-]?(\d+)?x/g) || []).reduce((s, nX) => {
    系数 = nX.slice(0, -1)

    if (系数 === '-') {
      return s - 1
    } else if (系数 === '0' || 系数 === '+0' || 系数 === '-0') {
      return s
    } else {
      return s + (+系数 || 1)
    }
  }, 0)

  const 等式左边 = 左边的x系数 - 右边的x系数
  const 等式右边 = 右边的常数 - 左边的常数

  if (等式左边 === 0 && 等式右边 === 0) {
    return "Infinite solutions"
  }

  if (等式左边 === 0) {
    if (等式右边 === 0) {
      return "Infinite solutions"
    } else {
      return "No solution"
    }
  } else {
    return `x=${等式右边 / 等式左边}`
  }
};
