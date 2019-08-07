/*
给定一个正整数 num，编写一个函数，如果 num 是一个完全平方数，则返回 True，否则返回 False。

说明：不要使用任何内置的库函数，如  sqrt。

示例 1：

输入：16
输出：True
示例 2：

输入：14
输出：False
*/

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  const isEven = num % 2 === 0

  let i = isEven ? 2 : 1;
  let square = 0;

  while((square = i * i) <= num) {
    if (square === num) {
      return true
    }
    i += 2
  }

  return false
};
