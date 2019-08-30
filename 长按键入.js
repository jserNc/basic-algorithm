/*
你的朋友正在使用键盘输入他的名字 name。偶尔，在键入字符 c 时，按键可能会被长按，而字符可能被输入 1 次或多次。

你将会检查键盘输入的字符 typed。如果它对应的可能是你的朋友的名字（其中一些字符可能被长按），那么就返回 True。

 

示例 1：

输入：name = "alex", typed = "aaleex"
输出：true
解释：'alex' 中的 'a' 和 'e' 被长按。
示例 2：

输入：name = "saeed", typed = "ssaaedd"
输出：false
解释：'e' 一定需要被键入两次，但在 typed 的输出中不是这样。
示例 3：

输入：name = "leelee", typed = "lleeelee"
输出：true
示例 4：

输入：name = "laiden", typed = "laiden"
输出：true
解释：长按名字中的字符并不是必要的。
 

提示：

name.length <= 1000
typed.length <= 1000
name 和 typed 的字符都是小写字母。
*/

/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
  if (name === typed) {
    return true
  } else if (name.length >= typed.length) {
    return false
  }

  const nameArr = []
  const typedArr = []

  name.replace(/(\w)(\1){0,}/g, s => {
    nameArr.push(s)
  })

  typed.replace(/(\w)(\1){0,}/g, s => {
    typedArr.push(s)
  })

  for (var i = 0; i < nameArr.length; i++) {
    if (!typedArr[i] || !typedArr[i].includes(nameArr[i])) {
      return false
    }
  }

  return true
};

var isLongPressedName = function(name, typed) {
  let currenChar
  let currenCharLen
  let typedArr = typed.split('')
  let currenCharTypeedLen

  for (var i = 0; i < name.length; i++) {
    currenChar = name[i]
    currenCharLen = 1

    while(name[i+1] === currenChar) {
      i++
      currenCharLen++
    }

    if (typedArr[0] === currenChar) {
      currenCharTypeedLen = 0
      while(typedArr[0] === currenChar) {
        typedArr.shift()
        currenCharTypeedLen++
      }
    } else {
      return false
    }

    if (currenCharTypeedLen < currenCharLen) {
      return false
    }
  }

  return true
}
