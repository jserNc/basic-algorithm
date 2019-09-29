/*
给定数组 A，我们可以对其进行煎饼翻转：我们选择一些正整数 k <= A.length，然后反转 A 的前 k 个元素的顺序。我们要执行零次或多次煎饼翻转（按顺序一次接一次地进行）以完成对数组 A 的排序。

返回能使 A 排序的煎饼翻转操作所对应的 k 值序列。任何将数组排序且翻转次数在 10 * A.length 范围内的有效答案都将被判断为正确。

 

示例 1：

输入：[3,2,4,1]
输出：[4,2,4,3]
解释：
我们执行 4 次煎饼翻转，k 值分别为 4，2，4，和 3。
初始状态 A = [3, 2, 4, 1]
第一次翻转后 (k=4): A = [1, 4, 2, 3]
第二次翻转后 (k=2): A = [4, 1, 2, 3]
第三次翻转后 (k=4): A = [3, 2, 1, 4]
第四次翻转后 (k=3): A = [1, 2, 3, 4]，此时已完成排序。
示例 2：

输入：[1,2,3]
输出：[]
解释：
输入已经排序，因此不需要翻转任何内容。
请注意，其他可能的答案，如[3，3]，也将被接受。
 

提示：

1 <= A.length <= 100
A[i] 是 [1, 2, ..., A.length] 的排列
*/

/**
 * @param {number[]} A
 * @return {number[]}
 */
var pancakeSort = function(A) {
  const findMaxIndex = (A, n) => {
    let maxIndex = 0
    for (var i = 1; i < n; i++) {
      if (A[i] > A[maxIndex]) {
        maxIndex = i
      }
    }
    return maxIndex
  }

  let 最大值索引
  const 反转索引 = []
  for (var i = 0; i < A.length; i++) {
    最大值索引 = findMaxIndex(A, A.length - i)

    if (最大值索引 === A.length - i - 1) {
      continue
    }

    if (最大值索引 === 0) {
      if (A.length - i > 1) {
        反转索引.push(A.length - i)
      }
      A = A.slice(0, A.length - i).reverse().concat(A.slice(A.length - i))
    } else {
      反转索引.push(最大值索引 + 1)
      A = A.slice(0, 最大值索引 + 1).reverse().concat(A.slice(最大值索引 + 1))
      反转索引.push(A.length - i)
      A = A.slice(0, A.length - i).reverse().concat(A.slice(A.length - i))
    }
  }

  return 反转索引
};
