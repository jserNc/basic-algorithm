/*
给定由一些正数（代表长度）组成的数组 A，返回由其中三个长度组成的、面积不为零的三角形的最大周长。

如果不能形成任何面积不为零的三角形，返回 0。

 

示例 1：

输入：[2,1,2]
输出：5
示例 2：

输入：[1,2,1]
输出：0
示例 3：

输入：[3,2,3,4]
输出：10
示例 4：

输入：[3,6,2,3]
输出：8
 

提示：

3 <= A.length <= 10000
1 <= A[i] <= 10^6
*/

/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
  const _A = A.slice()
  _A.sort((a, b) => a - b)

  const len = _A.length
  let i = 0

  let 最长边
  let 次长边
  let 第三边

  while (i < len - 2) {
    let 最长边 = _A[len - i - 1]
    let 次长边 = _A[len - i - 2]
    let 第三边 = _A[len - i - 3]
    if (第三边 > 最长边 - 次长边) {
      return  最长边 + 次长边 + 第三边
    }
    i++
  }

  return 0
};
