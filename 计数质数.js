/*
统计所有小于非负整数 n 的质数的数量。

示例:

输入: 10
输出: 4
解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
*/

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    const cache = {}
    let count = 0

    const isPrime = num => {
      if (cache[num] !== undefined) {
        return cache[num]
      }
      if (num < 2) {
        return cache[num] = false
      } else if (num < 4) {
        return cache[num] = true
      } else if (num % 2 === 0) {
        return cache[num] = false
      } else {
        let i = 3
        while(i <= Math.sqrt(num)) {
          if (num % i === 0) {
            return cache[num] = false
          }
          i += 2
        }
        return cache[num] = true
      }
    }

    let i = 0
    while(i < n) {
      if (i === 2 || i === 3 || i === 5) {
        i++
        count++
        continue
      } else if (i % 2 === 0 || i % 3 === 0 || i % 5 === 0) {
        i++
        continue
      } else if (isPrime(i++)) {
        count++
      }
    }

    console.log('cache...:', cache);
    return count
};
