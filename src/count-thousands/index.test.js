/*
 * @Date: 2022-04-12 00:31:03
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-04-12 00:32:57
 * @FilePath: /arithmetic/src/count-thousands/index.test.js
 */
const fun = require('./index.js')

describe('测试数字千分位逗号分割', () => {
    it('测试一般情况', () => {
        expect(fun(1231)).toBe('1,231')
    })
})