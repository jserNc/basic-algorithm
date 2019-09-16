/*
字符串 S 由小写字母组成。我们要把这个字符串划分为尽可能多的片段，同一个字母只会出现在其中的一个片段。返回一个表示每个字符串片段的长度的列表。

示例 1:

输入: S = "ababcbacadefegdehijhklij"
输出: [9,7,8]
解释:
划分结果为 "ababcbaca", "defegde", "hijhklij"。
每个字母最多出现在一个片段中。
像 "ababcbacadefegde", "hijhklij" 的划分是错误的，因为划分的片段数较少。
注意:

S的长度在[1, 500]之间。
S只包含小写字母'a'到'z'。
*/

/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
  const 长度列表 = []
  let 分隔字符信息
  let 分隔索引 = 0

  indexMap = findMaxIndexOfChar(S)

  for (var i = 0; i < S.length;) {
    分隔字符信息 = indexMap[S[i]]
    if (分隔字符信息[0] === 1) {
      长度列表.push(1)
      i++
    } else {
      分隔索引 = 分隔字符信息[1]
      for (var j = i + 1; j < 分隔索引; j++) {
        分隔字符信息 = indexMap[S[j]][1]
        if (分隔字符信息 > 分隔索引) {
          分隔索引 = 分隔字符信息
        }
      }
      长度列表.push(分隔索引 - i + 1)
      i = 分隔索引 + 1
    }
  }

  return 长度列表
};

var findMaxIndexOfChar = function(S) {
  const indexMap = {}
  let char
  for (var i = 0, len = S.length; i < len; i++) {
    char = S[i]
    if (indexMap[char] === undefined) {
      indexMap[char] = [1, i]
    } else {
      indexMap[char][0]++
      indexMap[char][1] = i
    }
  }

  return indexMap
}
