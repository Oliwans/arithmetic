/*
 * @Date: 2022-05-06 14:48:24
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-09 00:58:36
 * @FilePath: /arithmetic/src/two-number-sum-link/index.js
 */
/**
 * @description: 两链表数相加并生成新的链表
 * @param {*}
 * @return {*}
 */
 function ListNode(val, next) {
    this.val = this.val === undefined ? 0 : val
    this.next = this.next === undefined ? null : next
}
 var addTwoNumbers = function(l1, l2) {
    let head = tail = null
    let carry = 0
    while(l1 || l2) {
        const n1 = l1 ? l1.val : 0
        const n2 = l2 ? l2.val : 0
        let sum = n1 + n2 + carry;
        if (!head) {
            head = tail = new ListNode(sum % 10)
        } else {
            tail.next = new ListNode(sum % 10)
            tail = tail.next
        }
        carry = Math.floor(sum / 10)
        l1 = l1 && l1.next 
        l2 = l2 && l2.next
    }
    if (carry) {
        tail.next = new ListNode(carry)
    }
    return head
};