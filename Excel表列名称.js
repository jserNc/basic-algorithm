/*
给定一个正整数，返回它在 Excel 表中相对应的列名称。

例如，

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB
    ...
示例 1:

输入: 1
输出: "A"
示例 2:

输入: 28
输出: "AB"
示例 3:

输入: 701
输出: "ZY"
*/

var convertToTitle = function(n) {
    let res = [];
    let remainder = 0;
    let count = 1;

    while(n > 0) {
      remainder = n % 26;

      count ++;

      if (n < 27) {
        res.unshift(String.fromCharCode(64+n))
        n = 0;
      } else if (count === 2 && !remainder) {
        res.unshift(String.fromCharCode(90));
        n = (n - 26) / 26
      } else if (remainder) {
        res.unshift(String.fromCharCode(64+remainder));
        n = (n - remainder) / 26
      } else {
        res.unshift(String.fromCharCode(65));
        n = (n - remainder) / 26
      }
    }

    return res.join('')
};
