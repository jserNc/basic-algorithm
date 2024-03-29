/*
给你一个字符串 text，你需要使用 text 中的字母来拼凑尽可能多的单词 "balloon"（气球）。

字符串 text 中的每个字母最多只能被使用一次。请你返回最多可以拼凑出多少个单词 "balloon"。

示例 1：
输入：text = "nlaebolko"
输出：1

示例 2：
输入：text = "loonbalxballpoon"
输出：2

示例 3：
输入：text = "leetcode"
输出：0
*/

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
  const textArr = text.split('')
  let indexOfBalloon = 0
  let indexOfText
  let count = 0

  while ((indexOfText = textArr.findIndex(c => c === 'balloon'[indexOfBalloon % 7])) > -1) {
    textArr.splice(indexOfText, 1)
    if (indexOfBalloon % 7 === 6) {
      count++
    }
    indexOfBalloon++
  }

  return count
};
