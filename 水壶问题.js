/*
有两个容量分别为 x升 和 y升 的水壶以及无限多的水。请判断能否通过使用这两个水壶，从而可以得到恰好 z升 的水？

如果可以，最后请用以上水壶中的一或两个来盛放取得的 z升 水。

你允许：

装满任意一个水壶
清空任意一个水壶
从一个水壶向另外一个水壶倒水，直到装满或者倒空
示例 1: (From the famous "Die Hard" example)

输入: x = 3, y = 5, z = 4
输出: True
示例 2:

输入: x = 2, y = 6, z = 5
输出: False
*/

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function(x, y, z) {
  if (z > x + y) {
    return false
  }
  if (z === x + y) {
    return true
  }
  if (z === x || z === y) {
    return true
  }

  if (x % 2 === 0 && y % 2 === 0 && z % 2 === 1) {
    return false
  }


  let 最大公约数 = (a, b) => {
    if (a < b) {
      [a, b] = [b, a]
    }
    if (a % b === 0) {
      return b
    }
    return 最大公约数(b, a % b)
  }

  return z % 最大公约数(x, y) === 0
};

/*
设z = a * x + b * y;（a和b是整数有且可能是负数）假设x和y的最大公约数为g.
且 x = m * g, y = n * g; 则等式变为 z = (a * m + b * n) * g;
要想等式成立则z必需能被x和y的最大公约数整除。z % g = 0;

最大公约数
最大公约数就是两个数中,大家都能相约且最大的数。

辗转相除法
辗转相除法又名欧几里得算法（Euclidean algorithm）,目的是求出两个正整数的最大公约数。它是已知最古老的算法,其可追溯至公元前300年前。

这条算法基于一个定理：两个正整数 a 和 b（a 大于 b）,它们的最大公约数等于 a 除以 b 的余数 c 和 较小数 b 之间的最大公约数。
*/
