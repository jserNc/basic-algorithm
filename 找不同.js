/*
给定两个字符串 s 和 t，它们只包含小写字母。

字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。

请找出在 t 中被添加的字母。

 

示例:

输入：
s = "abcd"
t = "abcde"

输出：
e

解释：
'e' 是那个被添加的字母。
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  for (let i = 0, len = t.length; i < len; i++) {
    let l1 = s.match(new RegExp(t[i], 'g'))
    if (!l1 || l1.length !== t.match(new RegExp(t[i], 'g')).length) {
      return t[i]
    }
  }
};
