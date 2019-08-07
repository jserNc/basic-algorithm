/*
编写一个 JavaScript 函数 uniqueNums，该函数有一个参数 n（一个不大 31 的整数），其返回值是一个数组，该数组内是 n 个随机且不重复的整数，且整数取值范围是 [2, 32]。

请你完成 uniqueNums 的编写。
*/

const uniqueNums = (n) => {
  const arr = [];
  const genNum = function(arr) {
    let n = Math.floor(2 + (Math.random() * 31));
    while (arr.includes(n)) {
      n = Math.floor(2 + (Math.random() * 31));
    }
    return n
  };
  for (let i = 0; i < n; i++) {
    arr[i] = genNum(arr);
  }
  return arr;
}
