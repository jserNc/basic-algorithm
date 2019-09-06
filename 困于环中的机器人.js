/*
在无限的平面上，机器人最初位于 (0, 0) 处，面朝北方。机器人可以接受下列三条指令之一：

"G"：直走 1 个单位
"L"：左转 90 度
"R"：右转 90 度
机器人按顺序执行指令 instructions，并一直重复它们。

只有在平面中存在环使得机器人永远无法离开时，返回 true。否则，返回 false。

 

示例 1：

输入："GGLLGG"
输出：true
解释：
机器人从 (0,0) 移动到 (0,2)，转 180 度，然后回到 (0,0)。
重复这些指令，机器人将保持在以原点为中心，2 为半径的环中进行移动。
示例 2：

输入："GG"
输出：false
解释：
机器人无限向北移动。
示例 3：

输入："GL"
输出：true
解释：
机器人按 (0, 0) -> (0, 1) -> (-1, 1) -> (-1, 0) -> (0, 0) -> ... 进行移动。
 

提示：

1. 1 <= instructions.length <= 100
2. instructions[i] 在 {'G', 'L', 'R'} 中
*/

/**
 * @param {string} instructions
 * @return {boolean}
 */
function* genInstruction(instructions) {
  let i = 0, len = instructions.length

  function getFollowInstructions(index) {
    let r = ''
    for (var i = 1; i <= len; i++) {
      r += (index + i < len ? instructions[index + i] : instructions[(index + i) % len])
    }
    return r
  }

  while(i <= len * 4) {
    yield [instructions[i % len], getFollowInstructions(i)]

    i++
  }
}


var isRobotBounded = function(instructions) {
  const 走过的坐标和方向 = {
    [`0_0_上_${instructions}`]: '来过'
  }
  let 当前方向 = '上'
  let 当前位置 = {
    x: 0,
    y: 0
  }

  for (let [instruction, 后续指令] of genInstruction(instructions)) {
    switch (当前方向) {
      case '上':
        if (instruction === 'L') {
          当前方向 = '左'
        } else if (instruction === 'R') {
          当前方向 = '右'
        } else {
          当前位置.y++
        }
        break;
      case '右':
        if (instruction === 'L') {
          当前方向 = '上'
        } else if (instruction === 'R') {
          当前方向 = '下'
        } else {
          当前位置.x++
        }
        break;
      case '下':
        if (instruction === 'L') {
          当前方向 = '右'
        } else if (instruction === 'R') {
          当前方向 = '左'
        } else {
          当前位置.y--
        }
        break;
      case '左':
        if (instruction === 'L') {
          当前方向 = '下'
        } else if (instruction === 'R') {
          当前方向 = '上'
        } else {
          当前位置.x--
        }
        break;
      default:
    }
    if (走过的坐标和方向[`${当前位置.x}_${当前位置.y}_${当前方向}_${后续指令}`]) {
      return true
    } else {
      走过的坐标和方向[`${当前位置.x}_${当前位置.y}_${当前方向}_${后续指令}`] = '来过'
    }
  }

  return false
};
