/*
 * @Date: 2022-05-06 11:21:15
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-06 11:34:23
 * @FilePath: /arithmetic/src/delete-link-n/index.js
 */
/**
 * @description: 删除链表第n个节点，双指针推进法，时间复杂度O(n)
 * @param {*}
 * @return {*}
 */

function ListNode(val, next) {
    this.val = this.val === undefined ? 0 : val
    this.next = this.next === undefined ? null : next
}
function deleteLinkN(head, n) {
    let dummy = new ListNode(0, head)
    let forward = backward = dummy
    while (n--) {
        forward = forward.next
    }
    while (forward.next) {
        forword = forward.next
        backward = backward.next
    }
    backward.next = backward.next.next
    return dummy.next
}