/*
 * @Date: 2022-05-19 00:18:54
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-19 00:18:54
 * @FilePath: /arithmetic/src/build-tree/index.js
 */
/**
 * @description: 给定前序中序遍历构造二叉树
 * @param {*}
 * @return {*}
 */
 var buildTree = function(preorder, inorder) {
    if (!preorder.length || !inorder.length) return null
    let root = preorder[0]
    let rootTree = new TreeNode(root)
    let i = inorder.indexOf(root)
    rootTree.left = buildTree(preorder.slice(1, i+1), inorder.slice(0, i))
    rootTree.right = buildTree(preorder.slice(i+1), inorder.slice(i+1))
    return rootTree
};