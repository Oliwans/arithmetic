/*
 * @Date: 2022-04-07 11:46:45
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-04-07 15:37:31
 * @FilePath: /arithmetic/src/brackets-match/index.test.js
 */

const fun = require('./index.js')

describe('测试字符串括号匹配', () => {
    it('测试一般对称括号情况', () => {
        let str = '[{{sdfsdf}}]'
        expect(fun(str)).toBeTruthy();
    })
})