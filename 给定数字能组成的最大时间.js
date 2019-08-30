/*
给定一个由 4 位数字组成的数组，返回可以设置的符合 24 小时制的最大时间。

最小的 24 小时制时间是 00:00，而最大的是 23:59。从 00:00 （午夜）开始算起，过得越久，时间越大。

以长度为 5 的字符串返回答案。如果不能确定有效时间，则返回空字符串。

 

示例 1：

输入：[1,2,3,4]
输出："23:41"
示例 2：

输入：[5,5,5,5]
输出：""
 

提示：

A.length == 4
0 <= A[i] <= 9
*/

/**
 * @param {number[]} A
 * @return {string}
 */

var largestTimeFromDigits = function(A) {
  const time = []

  for (var i0 = 0; i0 < 4; i0++) {
    if (A[i0] < 3) {
      for (var i1 = 0; i1 < 4; i1++) {
        if ((A[i0] === 2 && A[i1] < 4) || A[i0] !== 2) {
          if (i1 !== i0) {
            for (var i2 = 0; i2 < 4; i2++) {
              if (A[i2] < 6 && i2 !== i1 && i2 !== i0) {
                for (var i3 = 0; i3 < 4; i3++) {
                  if (i3 !== i2 && i3 !== i1 && i3 !== i0) {
                    time.push(`${A[i0]}${A[i1]}:${A[i2]}${A[i3]}`)
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  if (time.length === 0) {
    return ""
  }

  return time.sort().pop()
}
