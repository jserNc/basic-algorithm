/*
同字母异序指的是两个字符串字母种类和字母的数量相同，但是顺序可能不同。

完成 isAnagram，接受两个字符串作为参数，返回true 或者 false 表示这两个字符串是否同字母异序。例如：

isAnagram("anagram", "nagaram") // => return true.
isAnagram("rat", "car") // => return false.
*/

const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  if (str1.length === 0) {
    return true;
  }

  while(str1.length > 0) {
    let r = new RegExp(str1[0],'g');
    let len1Before = str1.length;
    str1 = str1.replace(r, '');
    let len1After = str1.length;

    if (!str2.match(r) || str2.match(r).length !== len1Before - len1After) {
      return false
    }
  }

  return true;
}
