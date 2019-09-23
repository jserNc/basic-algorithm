/*
两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。

给出两个整数 x 和 y，计算它们之间的汉明距离。

注意：
0 ≤ x, y < 231.

示例:

输入: x = 1, y = 4

输出: 2

解释:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

上面的箭头指出了对应二进制位不同的位置。
*/

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let binaryX = decimal2Binary(x)
  let binaryY = decimal2Binary(y)

  const lenBinaryX = binaryX.length
  const lenBinaryY = binaryY.length

  if (x > y) {
    binaryY = '0'.repeat(lenBinaryX - lenBinaryY) + binaryY
  } else {
    binaryX = '0'.repeat(lenBinaryY - lenBinaryX) + binaryX
  }

  let count = 0
  for (var i = 0, len = x > y ? lenBinaryX : lenBinaryY; i < len; i++) {
    if (binaryX[i] !== binaryY[i]) {
      count++
    }
  }
  return count
};

var decimal2Binary = function(num) {
  binary = ''

  do {
    binary = num % 2 + binary
    num = num >> 1
  } while (num >= 2);

  binary = num + binary

  return binary
}
