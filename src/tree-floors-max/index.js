/*
 * @Date: 2022-05-06 15:17:35
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-07-12 18:10:45
 * @FilePath: /arithmetic/src/tree-floors-max/index.js
 */
/**
 * @description: 获取二叉树层级
 * @thinking 使用DFS深度优先遍历递归来获取
 * @param {root}
 * @return {root}
 */
var getTreeFloor = function(root) {
    if (!root) return 0
    else {
        return 1 + Math.max(getTreeFloor(root.left),getTreeFloor(root.right))
    }
};