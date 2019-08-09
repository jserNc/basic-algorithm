/*
给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a2 + b2 = c。

示例1:

输入: 5
输出: True
解释: 1 * 1 + 2 * 2 = 5
 

示例2:

输入: 3
输出: False
*/

/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let r
    let squareRoot = ~~Math.sqrt(c)
    for (let i = 0; i <= squareRoot; i++) {
      for (var j = 0; j <= squareRoot; j++) {
        r = i * i + j * j
        if (r === c) {
          return true
        } else if (r > c) {
          break;
        }
      }
    }

    return false
};
