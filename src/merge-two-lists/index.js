/*
 * @Date: 2022-05-18 23:30:16
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-18 23:30:16
 * @FilePath: /arithmetic/src/merge-two-lists/index.js
 */
/**
 * @description: 合并两个有序链表
 * @param {*}
 * @return {*}
 */
 var mergeTwoLists = function(list1, list2) {
    let head = prev = new ListNode(-1);
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            prev.next = list1
            list1 = list1.next
        } else if (list1.val > list2.val) {
            prev.next = list2
            list2 = list2.next
        }
        prev = prev.next
    }
    prev.next = list1 || list2
    return head.next
};