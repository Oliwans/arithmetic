/*
 * @Date: 2022-05-19 00:17:30
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-19 00:17:30
 * @FilePath: /arithmetic/src/level-order-tree/index.js
 */
/**
 * @description: 二叉树层序遍历
 * @param {*}
 * @return {*}
 */
 var levelOrder = function(root) {
    debugger
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