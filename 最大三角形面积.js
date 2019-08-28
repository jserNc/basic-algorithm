/*
给定包含多个点的集合，从其中取三个点组成三角形，返回能组成的最大三角形的面积。

示例:
输入: points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
输出: 2
解释:
这五个点如下图所示。组成的橙色三角形是最大的，面积为2。


3 <= points.length <= 50.
不存在重复的点。
 -50 <= points[i][j] <= 50.
结果误差值在 10^-6 以内都认为是正确答案。
*/

/**
 * @param {number[][]} points
 * @return {number}
 */
var area = function([x1, y1], [x2, y2], [x3, y3]) {
  return Math.abs(0.5 * (x1 * y2 + x2 * y3 + x3 * y1 - x1 * y3 - x2 * y1 - x3 * y2))
}

var largestTriangleArea = function(points) {
  let maxArea = 0
  let currenArea = 0

  for (let p1 of points) {
    for (let p2 of points) {
      if (p2 !== p1) {
        for (let p3 of points) {
          if (p3 !== p2) {
            currenArea = area(p1,p2,p3)
            if (currenArea > maxArea) {
              maxArea = currenArea
            }
          }
        }
      }
    }
  }

  return maxArea
};
