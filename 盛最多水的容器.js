/*
给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

说明：你不能倾斜容器，且 n 的值至少为 2。

例如输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水的最大值为 49。
*/

var maxArea = function(height) {
    var result = 0;
    var temResult = 0;
    var maxHeight = 0;
    var len = height.length;

    for (var i = 0; i < len - 1; i++) {
      if (height[i] > maxHeight) {
        maxHeight = height[i];
      } else {
        continue;
      }
      for (var j = i + 1 ; j < len; j++) {
        temResult = (j - i) * Math.min(maxHeight, height[j]);
        if (temResult > result) {
          result = temResult
        }
      }
    }
    return result
};
