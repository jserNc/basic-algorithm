/*
给你两个数组，arr1 和 arr2，

arr2 中的元素各不相同
arr2 中的每个元素都出现在 arr1 中
对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。

 

示例：

输入：arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
输出：[2,2,2,1,4,3,3,9,6,7,19]
 

提示：

arr1.length, arr2.length <= 1000
0 <= arr1[i], arr2[i] <= 1000
arr2 中的元素 arr2[i] 各不相同
arr2 中的每个元素 arr2[i] 都出现在 arr1 中
*/

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  const indexMap = {}

  return arr1.slice().sort((n1, n2) => {
    let index1 = indexMap[`${n1}`] !== undefined ? indexMap[`${n1}`] : (indexMap[`${n1}`] = arr2.findIndex(n => n === n1))
    let index2 = indexMap[`${n2}`] !== undefined ? indexMap[`${n2}`] : (indexMap[`${n2}`] = arr2.findIndex(n => n === n2))

    if (index1 === -1) {
      if (index2 === -1) {
        return n1 - n2
      } else {
        return 1
      }
    } else {
      if (index2 === -1) {
        return -1
      } else {
        return index1 - index2
      }
    }
  })
};
