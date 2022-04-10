/*
 * @Date: 2022-04-10 19:42:58
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-04-10 19:44:17
 * @FilePath: /arithmetic/src/move-zero/index.test.js
 */
const fun = require('./index.js')

describe('测试数组为0的值移到末尾', () => {
    it('测试一般情况', () => {
        expect(fun([1,0,3,4,0,0,11,0])).toEqual([1, 3, 4, 11,0, 0, 0, 0])
    })
})