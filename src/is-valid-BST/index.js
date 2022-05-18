/*
 * @Date: 2022-05-19 00:12:48
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-19 00:12:48
 * @FilePath: /arithmetic/src/is-valid-BST/index.js
 */
/**
 * @description: 验证二叉搜索数
 * @param {*}
 * @return {*}
 */
 var isValidBST = function(root, min = -Infinity, max = Infinity) {
    if (!root) return true
    if (root.val <= min || root.val >= max) return false
    return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max)
}
