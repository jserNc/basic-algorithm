/*
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

输入: ["flower","flow","flight"]
输出: "fl"
示例 2:

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
说明:

所有输入只包含小写字母 a-z 。
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let 公共前缀 = strs[0]
  if (公共前缀 === undefined) {
    return ""
  }

  const findCommonPrefix = (str1, str2) => {
    let commonPrefix = ''
    let longgerCommonPrefix

    while (1) {
      longgerCommonPrefix = str1.substr(0, commonPrefix.length + 1)
      if (str2.startsWith(longgerCommonPrefix)) {
        commonPrefix = longgerCommonPrefix
      } else {
        break
      }
    }

    return commonPrefix
  }

  for (let str of strs) {
    if (公共前缀.length === 0) {
      break
    }
    if (str.startsWith(公共前缀)) {
      continue
    } else {
      公共前缀 = findCommonPrefix(公共前缀, str)
    }
  }

  return 公共前缀
};
