/*
汉诺塔问题（又称为河内塔问题），是一个大家熟知的问题。在A，B，C三根柱子上，有n个不同大小的圆盘（假设半径分别为1-n吧），一开始他们都叠在我A上（如图所示），你的目标是在最少的合法移动步数内将所有盘子从A塔移动到C塔。
游戏中的每一步规则如下：

1. 每一步只允许移动一个盘子（从一根柱子最上方到另一个柱子的最上方）
2. 移动的过程中，你必须保证大的盘子不能在小的盘子上方（小的可以放在大的上面，最大盘子下面不能有任何其他大小的盘子)

样例
样例 1:

输入:n = 2
输出: ["from A to B","from A to C","from B to C"]
样例 2:

输入:n = 3
输出:["from A to C","from A to B","from C to B","from A to C","from B to A","from B to C","from A to C"
*/

/**
 * @param n: the number of disks
 * @return: the order of moves
 */
const towerOfHanoi = function (n) {
  if (n === 0) {
    return []
  } else if (n === 1) {
    return ["from A to C"]
  } else {
    let 少一块从A移动到C的路径 = towerOfHanoi(n - 1)
    const 少一块从A移动到B的路径 = []
    const 少一块从B移动到C的路径 = []

    for (let 路径 of 少一块从A移动到C的路径) {
      少一块从A移动到B的路径.push(路径.replace(/[BC]/g, T => T === 'B' ? 'C' : 'B'))
      少一块从B移动到C的路径.push(路径.replace(/[AB]/g, T => T === 'B' ? 'A' : 'B'))
    }

    return 少一块从A移动到B的路径.concat("from A to C").concat(少一块从B移动到C的路径)
  }
}
