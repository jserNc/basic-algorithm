/*
给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

例如由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水。
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    var water = 0;
    var idx = 0;
    var len = height.length;

    var calWater = function(height, pool) {
        var { left, right } = pool;
        var waste = 0;

        for (let i = left + 1; i < right; i++) {
          waste += height[i];
        }
        return Math.min(height[left], height[right]) * [right - left - 1] - waste;
    }

    var left = 0;
    var right = 0;
    var pool = { h: 0, left: 0, right: 0 };
    var leftCursor = 0;
    var rightCursor = 0

    while (idx < len) {
      left = idx - 1;
      right = idx + 1;
      leftCursor = left;
      rightCursor = right;

      if (height[idx] <= height[left] && height[idx] <= height[right]) {

        while (leftCursor >= pool.right && rightCursor <= len - 1) {
          while (leftCursor >= pool.right && height[right] >= height[left]) {
            leftCursor--;
            if (height[leftCursor] > height[left]) {
              left = leftCursor
            }
          }

          while (rightCursor <= len - 1 && height[left] >= height[right]) {
            rightCursor++;
            if (height[rightCursor] > height[right]) {
              right = rightCursor
            }
          }
        }

        pool = { h: height[idx], idx, left, right};
        water += calWater(height, pool);
      }

      idx = right;
    }

    return water;
};
