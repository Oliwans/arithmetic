/*
 * @Date: 2022-04-15 13:28:53
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-04-15 13:30:44
 * @FilePath: /arithmetic/src/highest-frequency-char/index.test.js
 */
const fun = require('./index.js')

describe('测试输出出现频率最高的字符', () => {
    it('测试一般情况', () => {
        expect(fun('addaad')).toEqual({value: 'a', count: 3})
    })
})