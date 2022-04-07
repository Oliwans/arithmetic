/*
 * @Date: 2022-04-07 19:35:18
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-04-07 19:41:21
 * @FilePath: /arithmetic/src/reverse-link-list/index.test.js
 */

const {createLinkList, reverseLinkList} = require('./index.js')

describe('测试反转单向链表', () => {
    it('测试数组生成链表及反转链表', () => {
        let linkList = createLinkList([1,2,3,4,5])
        expect(linkList.next.next.next.next.value).toBe(5)
        expect(linkList.next.next.next.next.next).toBeUndefined()
        let reverseList = reverseLinkList(linkList)
        expect(reverseList.next.next.next.next.value).toBe(1)
        expect(reverseList.next.next.next.next.next).toBeUndefined()
    })
})