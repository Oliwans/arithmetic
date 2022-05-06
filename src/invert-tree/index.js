/*
 * @Date: 2022-05-06 15:17:35
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-06 15:19:42
 * @FilePath: /arithmetic/src/invert-tree/index.js
 */
/**
 * @description: 反转二叉树
 * @param {*} accounts
 * @return {*}
 */
var invertTree = function(root) {
    if (root === null) return root
    let left = invertTree(root.right)
    let right = invertTree(root.left)
    root.left = right
    root.right = left
    return root
};