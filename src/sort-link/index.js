/*
 * @Date: 2022-05-19 00:48:01
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-19 00:48:01
 * @FilePath: /arithmetic/src/sort-link/index.js
 */
/**
 * @description: 链表排序
 * @param {*}
 * @return {*}
 */
 var sortList = function(head) {
    if(!head) return null;
    // 将链表的全部节点切断，并放入数组中
    let s = [];
    while (head) {
        let temp = head.next;
        head.next = null;
        s.push(head);
        head = temp;
    }
    // 对数组中的所有节点进行排序
    s.sort((a, b) => (a.val - b.val));
    // 拼接成链表
    for(let i = 0; i < s.length - 1; i++) {
        s[i].next = s[i + 1];
    }
    return s[0];
};