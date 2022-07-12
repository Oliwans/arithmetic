/*
 * @Date: 2022-05-19 00:17:30
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-07-12 18:45:09
 * @FilePath: /arithmetic/src/level-order-tree/index.js
 */
/**
 * @description: 二叉树层序遍历
 * @thinking 使用BFS+队列方式，首先把根节点入队，while判断队列queue是否有值依次出队组成集合，通过对出队节点left和right判断再依次入队
 * @param {*}
 * @return {*}
 */
 var levelOrder = function(root) {
    let res = []
    let queue = []
    if (root) queue.push(root)
    while (queue.length) {
        let arr = []
        let size = queue.length
        for (let i=0; i<size; i++) {
            let node = queue.shift()
            arr.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        res.push(arr)
    }
    return res
};