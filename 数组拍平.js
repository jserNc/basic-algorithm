/*
编写一个 JavaScript 函数，接受一个仅包含数字的 多维数组 ，返回拍平以后的结果。例如传入：[1, [[2], 3, 4], 5]，返回 [1, 2, 3, 4, 5]。
*/

const flatten = (arr) => {
  let flatArr = [];
  arr.forEach(e => {
    if (typeof e === "number") {
      flatArr.push(e)
    } else if (e instanceof Array) {
      flatArr.push(...flatten(e))
    }
  })
  return flatArr
}


const flatten = (arr) => {
  return arr.join().split(',').filter(s => s !== '').map(s => Number(s))
}
