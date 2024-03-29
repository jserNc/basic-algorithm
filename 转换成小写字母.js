/*
实现函数 ToLowerCase()，该函数接收一个字符串参数 str，并将该字符串中的大写字母转换成小写字母，之后返回新的字符串。

 

示例 1：

输入: "Hello"
输出: "hello"
示例 2：

输入: "here"
输出: "here"
示例 3：

输入: "LOVELY"
输出: "lovely"
*/

/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  return str.split('').map(char => {
    const charCode = char.charCodeAt(0)
    if (charCode >= 65 && charCode <= 90) {
      return String.fromCharCode(charCode + 32)
    } else {
      return char
    }
  }).join('')
};
