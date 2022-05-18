/*
 * @Date: 2022-05-19 00:37:40
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-19 00:37:40
 * @FilePath: /arithmetic/src/rolowest-common-ancestorb/index.js
 */
/**
 * @description: 二叉树的最近公共祖先
 * @param {*}
 * @return {*}
 */
 var lowestCommonAncestor = function(root, p, q) {
    let res = null
    function dfs(root) {
        let count = 0
        if (root.val === p.val || root.val === q.val) {
            count++
        }
        if (!res) {
            if (root.left) {
                count += dfs(root.left)
            }
            if (!res && root.right) {
                count += dfs(root.right)
            }
            if (!res && count === 2) {
                res = root
            }
        }
        return count
    }
    dfs(root)
    return res
};