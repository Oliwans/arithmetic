/*
 * @Date: 2022-05-06 15:17:35
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-07-12 18:37:11
 * @FilePath: /arithmetic/src/tree-floors-min/index.js
 */
/**
 * @description: 获取二叉树层级
 * @thinking 使用DFS，初始化min为最大值，循环整个tree，如果没有left和right节点，则更新min值; 使用BFS，发现某个节点没有left和right节点，直接返回结果
 * @param {root}
 * @return {root}
 */
var getTreeFloor = function(root) {
    let min = Infinity
    function helper(root, deth) {
        if (!root) return
        if (!root.left && !root.right) {
            min = Math.min(min, deth)
        }
        if (root.left) {
            min = helper(root.left, deth + 1)
        }
        if (root.right) {
            min = helper(root.right, deth + 1)
        }
    }
    helper(root, 1)
    return min === Infinity ? 0 : min
};

var getTreeFloor = function(root) {
    if (!root) return 0
    let count = 0
    let queue = [root]
    while(queue.length) {
        count++
        let size = queue.length
        for (let i = 0; i<size; i++) {
            let item = queue.shift()
            if (!item.left && !item.right) return count
            if (item.left) queue.push(item.left)
            if (item.right) queue.push(item.right)
        }
    }
}