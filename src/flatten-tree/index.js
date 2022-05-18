/*
 * @Date: 2022-05-19 00:20:30
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-19 00:20:30
 * @FilePath: /arithmetic/src/flatten-tree/index.js
 */
/**
 * @description: 二叉树展开为链表
 * @param {*}
 * @return {*}
 */

 var flatten = function(root) {
    let list = []
    frontTraverseTree(root)
    for (let i = 1; i < list.length; i++) {
        list[i-1].left = null
        list[i-1].right = list[i]
    }
    function frontTraverseTree(node) {
        if (!node) return
        list.push(node)
        frontTraverseTree(node.left)
        frontTraverseTree(node.right)
    }
    // return list
};