/*
 * @Date: 2022-04-07 17:48:01
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-04-07 20:24:12
 * @FilePath: /arithmetic/src/reverse-link-list/index.js
 */
/**
 * @description: 数组实现链表 时间复杂度O(n) 空间复杂度O(n)
 * @param {arr}
 * @return {node}
 */

function createLinkList(arr) {
    let len = arr.length;
    if (!len) throw new Error('arr is empty')
    if (len === 1) return {value: arr[0]}
    let node = {}
    for (let i = len - 1; i >=0; i--) {
        node = {
            value: arr[i],
            next: node
        }
        if (i === len - 1) delete node.next
    }
    return node
}
/**
 * @description: 翻转单向链表 时间复杂度O(n) 空间复杂度O(n)
 * @param {obj}
 * @return {reverseObj}
 */
function reverseLinkList(obj) {
    if (!obj.next) return obj
    let prevNode = undefined
    let currNode = obj
    let nextNode = obj.next
    while(nextNode) {
        if (!prevNode) {
            delete currNode.next
        } else {
            currNode.next = prevNode
        }

        prevNode = currNode
        currNode = nextNode
        nextNode = nextNode.next
    }
    currNode.next = prevNode
    return currNode
}

module.exports = {
    createLinkList,
    reverseLinkList
}