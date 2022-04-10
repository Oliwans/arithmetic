/*
 * @Date: 2022-04-10 19:05:06
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-04-10 19:11:13
 * @FilePath: /arithmetic/src/fibonacci/index.test.js
 */
const fibonacci = require('./index.js')

describe('测试斐波那契数量第n个数的值', () => {
    it('测试一般情况', () => {
        expect(fibonacci(9)).toBe(34)
    })
})