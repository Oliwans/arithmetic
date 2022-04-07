/*
 * @Date: 2022-04-07 11:46:45
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-04-07 11:48:10
 * @FilePath: /arithmetic/src/brackets-match/index.test.js
 */

const fun = require('./index.js')

describe('测试K值翻转', () => {
    it('测试空数组情况', () => {
        let str = '[{{sdfsdf}}]'
        expect(fun(str)).toBeTruthy();
    })
})