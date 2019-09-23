/*
初始时有 n 个灯泡关闭。 第 1 轮，你打开所有的灯泡。 第 2 轮，每两个灯泡你关闭一次。 第 3 轮，每三个灯泡切换一次开关（如果关闭则开启，如果开启则关闭）。第 i 轮，每 i 个灯泡切换一次开关。 对于第 n 轮，你只切换最后一个灯泡的开关。 找出 n 轮后有多少个亮着的灯泡。

示例:

输入: 3
输出: 1
解释:
初始时, 灯泡状态 [关闭, 关闭, 关闭].
第一轮后, 灯泡状态 [开启, 开启, 开启].
第二轮后, 灯泡状态 [开启, 关闭, 开启].
第三轮后, 灯泡状态 [开启, 关闭, 关闭].

你应该返回 1，因为只有一个灯泡还亮着。
*/

/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
  if (n === 1) {
    return 1
  }

  if (n === 2) {
    return 1
  }

  const 状态 = new Array(n).fill(true)
  for (let i = 0; i < 状态.length; i++) {
    if (i % 2 !== 0) {
      状态[i] = false
    }
  }

  for (let i = 3; i <= n; i++) {
    for (var j = 0; j < 状态.length; j++) {
      if ((j+1) % i === 0) {
        状态[j] = !状态[j]
      }
    }
  }

  return 状态.filter(s => s).length
};
