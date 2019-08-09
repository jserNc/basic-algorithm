/*
给定一个单词，你需要判断单词的大写使用是否正确。

我们定义，在以下情况时，单词的大写用法是正确的：

全部字母都是大写，比如"USA"。
单词中所有字母都不是大写，比如"leetcode"。
如果单词不只含有一个字母，只有首字母大写， 比如 "Google"。
否则，我们定义这个单词没有正确使用大写字母。

示例 1:

输入: "USA"
输出: True
示例 2:

输入: "FlaG"
输出: False
注意: 输入是由大写和小写拉丁字母组成的非空单词
*/

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  let len = word.length
  let index = 1

  const isSameChar = (min, max) => {
    while (index < len && word[index] >= min && word[index] <= max) {
      index++
    }

    if (index === len) {
      return true
    } else {
      return false
    }
  }

  if (len > 1 && word[0] >= 'A' && word[0] <= 'Z') {
    if (word[1] >= 'a' && word[1] <= 'z') {
      index++
      return isSameChar('a', 'z')
    } else {
      return isSameChar('A', 'Z')
    }
  } else {
    return isSameChar('a', 'z')
  }
};

// 利用库函数
var detectCapitalUse = function(word) {
  if (word.length > 1) {
    if (word.toUpperCase() === word) {
      return true
    }
    let newWord = word.slice(1)
    if (newWord.toLowerCase() === newWord) {
      return true
    }

    return false
  } else {
    return true
  }
}
