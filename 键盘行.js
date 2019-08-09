/*
给定一个单词列表，只返回可以使用在键盘同一行的字母打印出来的单词。

示例：

输入: ["Hello", "Alaska", "Dad", "Peace"]
输出: ["Alaska", "Dad"]
 

注意：

你可以重复使用键盘上同一字符。
你可以假设输入的字符串将只包含字母。
*/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  const charMap = {
    one: 'qwertyuiop',
    two: 'asdfghjkl',
    three: 'zxcvbnm'
  }

  Object.entries(charMap).forEach(keyValue => {
    keyValue[1].split('').forEach(c => {
      charMap[c] = keyValue[0]
    })
  })

  return words.filter(word => {
    const type = charMap[word[0].toLowerCase()]
    const len = word.length
    let i = 1
    while (i < len && charMap[word[i].toLowerCase()] === type) {
      i++
    }
    if (i === len) {
      return true
    } else {
      return false
    }
  })
};
