/*
 * @Date: 2022-04-11 01:44:04
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-04-11 01:46:14
 * @FilePath: /arithmetic/src/continue-number/index.test.js
 */
const fun = require('./index.js')

describe('测试输出连续字符及次数', () => {
    it('测试重复的结尾的情况', () => {
        expect(fun('add')).toEqual({char: 'd', count: 2})
    })
    it('测试一般情况', () => {
        expect(fun('addsdfsfsdssssssddd')).toEqual({char: 's', count: 6})
    })
    it('测试空字符串情况', () => {
        expect(fun('')).toEqual({char: '', count: 0})
    })
})