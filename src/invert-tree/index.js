/*
 * @Date: 2022-05-06 15:17:35
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-07-14 16:44:35
 * @FilePath: /arithmetic/src/invert-tree/index.js
 */
/**
 * @description 反转二叉树
 * @thinking 使用递归来依次改变每一个子节点及更下级节点的左右节点顺序
 * @param {root}
 * @return {root}
 */
var invertTree = function(root) {
    if (root === null) return root
    let left = invertTree(root.right)
    let right = invertTree(root.left)
    root.left = right
    root.right = left
    return root
};