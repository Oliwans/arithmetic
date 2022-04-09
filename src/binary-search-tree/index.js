/*
 * @Date: 2022-04-10 00:49:09
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-04-10 01:03:00
 * @FilePath: /arithmetic/src/binary-search-tree/index.js
 */
/**
 * @description: 二叉树前、中、后序遍历
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

module.exports = {frontTraverseTree, middleTraverseTree, postTraverseTree}