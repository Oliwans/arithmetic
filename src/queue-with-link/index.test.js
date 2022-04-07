/*
 * @Date: 2022-04-07 20:45:34
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-04-07 20:45:34
 * @FilePath: /arithmetic/src/queue-with-link/index.test.js
 */
const myQueue = require('./index.js')

describe('测试链表实现队列', () => {
    it('测试操作队列', () => {
        let queue = new myQueue()
        queue.add(234)
        queue.add(678)
        queue.add(987)
        expect(queue.length).toBe(3)
        expect(queue.delete()).toBe(234)
        expect(queue.length).toBe(2)
    })
})