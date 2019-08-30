/*
机器人在一个无限大小的网格上行走，从点 (0, 0) 处开始出发，面向北方。该机器人可以接收以下三种类型的命令：

-2：向左转 90 度
-1：向右转 90 度
1 <= x <= 9：向前移动 x 个单位长度
在网格上有一些格子被视为障碍物。

第 i 个障碍物位于网格点  (obstacles[i][0], obstacles[i][1])

如果机器人试图走到障碍物上方，那么它将停留在障碍物的前一个网格方块上，但仍然可以继续该路线的其余部分。

返回从原点到机器人的最大欧式距离的平方。

 

示例 1：

输入: commands = [4,-1,3], obstacles = []
输出: 25
解释: 机器人将会到达 (3, 4)
示例 2：

输入: commands = [4,-1,4,-2,4], obstacles = [[2,4]]
输出: 65
解释: 机器人在左转走到 (1, 8) 之前将被困在 (1, 4) 处
 

提示：

0 <= commands.length <= 10000
0 <= obstacles.length <= 10000
-30000 <= obstacle[i][0] <= 30000
-30000 <= obstacle[i][1] <= 30000
答案保证小于 2 ^ 31
*/

/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var changeDirection = function(direction, command) {
  // ['up', 'right', 'down', 'left']
  const dirs = [1, 2, 3, 4]
  if (command === -2) {
    return direction === 1 ? 4 : direction - 1
  } else if (command === -1) {
    return direction === 4 ? 1 : direction + 1
  }
}


var robotSim = function(commands, obstacles) {
  let location = [0, 0]
  let direction = 1
  let obstacle
  let maxDistance = 0
  let currentDistance = 0

  commands.forEach(command => {
    if (command < 0) {
      direction = changeDirection(direction, command)
    } else {
      switch (direction) {
        case 1:
          obstacle = obstacles.filter(o => o[0] === location[0]).sort((o1, o2) => o1[1] - o2[1]).find(o => o[1] > location[1] && o[1] <= location[1] + command)

          if (obstacle) {
            location[1] = obstacle[1] - 1
          } else {
            location[1] += command
          }
          break;
        case 2:
          obstacle = obstacles.filter(o => o[1] === location[1]).sort((o1, o2) => o1[0] - o2[0]).find(o => o[0] > location[0] && o[0] <= location[0] + command)

          if (obstacle) {
            location[0] = obstacle[0] - 1
          } else {
            location[0] += command
          }
          break;
        case 3:
          obstacle = obstacles.filter(o => o[0] === location[0]).sort((o1, o2) => o1[1] - o2[1]).find(o => o[1] < location[1] && o[1] >= location[1] - command)

          if (obstacle) {
            location[1] = obstacle[1] + 1
          } else {
            location[1] -= command
          }
          break;
        case 4:
          obstacle = obstacles.filter(o => o[1] === location[1]).sort((o1, o2) => o1[0] - o2[0]).find(o => o[0] < location[0] && o[0] >= location[0] - command)

          if (obstacle) {
            location[0] = obstacle[0] + 1
          } else {
            location[0] -= command
          }
          break;
        default:
      }
      currentDistance = location[0] * location[0] + location[1] * location[1]
      if (currentDistance > maxDistance) {
        maxDistance = currentDistance
      }
    }
  })

  return maxDistance
};
