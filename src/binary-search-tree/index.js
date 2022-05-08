/*
 * @Date: 2022-04-10 00:49:09
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-08 22:55:16
 * @FilePath: /arithmetic/src/binary-search-tree/index.js
 */
/**
 * @description: 二叉树前、中、后序遍历 时间复杂度O(n) 空间复杂度O(n)
 * @param {node}
 * @return {value}
 */

//前序
function frontTraverseTree(node) {
    if (!node) return
    console.log(node.value)
    frontTraverseTree(node.left)
    frontTraverseTree(node.right)
}

//中序
function middleTraverseTree(node) {
    if (!node) return
    middleTraverseTree(node.left)
    console.log(node.value)
    middleTraverseTree(node.right)
}

//后序
function postTraverseTree(node) {
    if (!node) return
    postTraverseTree(node.left)
    postTraverseTree(node.right)
    console.log(node.value)
}

// 查找第K小值 时间复杂度O(n)，采用中序遍历，可以把顺序由小到大排列，第k-1个就是第k小值
function findTreeK(tree, k) {
    const arr = []
    function middleTraverseTree(node) {
        if (!node) return
        middleTraverseTree(node.left)
        arr.push(node.value)
        middleTraverseTree(node.right)
    }
    middleTraverseTree(tree)
    return arr[k - 1]
}
module.exports = {frontTraverseTree, middleTraverseTree, postTraverseTree, findTreeK}