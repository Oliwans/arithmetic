/*
 * @Date: 2022-05-19 00:37:40
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-07-12 17:13:12
 * @FilePath: /arithmetic/src/rolowest-common-ancestorb/index.js
 */
/**
 * @description 二叉树的最近公共祖先
 * @thinking 使用DFS来寻找两个节点的公共祖先，当count为1时该父节点只能找到一个子节点，count为2时即为两个节点的最近公共祖先
 * @param {root, p, q}
 * @return {res}
 */
 var lowestCommonAncestor = function(root, p, q) {
    let res = null
    function dfs(root) {
        let count = 0
        if (root.val === p.val || root.val === q.val) {
            count++
        }
        if (!res && root.left) {
            count += dfs(root.left)
        }
        if (!res && root.right) {
            count += dfs(root.right)
        }
        if (!res && count === 2) {
            res = root
        }
        return count
    }
    dfs(root)
    return res
};