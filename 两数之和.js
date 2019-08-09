/*
给定一个二叉搜索树和一个目标结果，如果 BST 中存在两个元素且它们的和等于给定的目标结果，则返回 true。

案例 1:

输入:
    5
   / \
  3   6
 / \   \
2   4   7

Target = 9

输出: True
 

案例 2:

输入:
    5
   / \
  3   6
 / \   \
2   4   7

Target = 28

输出: False
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  if (root.left) {
    if (findNum(root.left, k - root.val)) {
      return true
    }

    if (findTarget(root.left, k)) {
      return true
    }
  }

  if (root.right) {
    if (findNum(root.right, k - root.val)) {
      return true
    }
    if (findTarget(root.right, k)) {
      return true
    }
  }

  if (root.left && root.right) {
    if (root.left.val + root.right.val === k) {
      return true
    }

    let values = []
    travel(root.left, values)
    for (var i = 0; i < values.length; i++) {
      if (findNum(root.right, k - values[i])) {
        return true
      }
    }
  }

  return false
};

var findNum = function(node, n) {
  if (node.val === n) {
    return true
  } else if (node.left && findNum(node.left, n)) {
    return true
  } else if (node.right && findNum(node.right, n)) {
    return true
  } else {
    return false
  }
}

var travel = function(node, values) {
  values.push(node.val)

  if (node.left) {
    travel(node.left, values)
  }

  if (node.right) {
    travel(node.right, values)
  }
}
