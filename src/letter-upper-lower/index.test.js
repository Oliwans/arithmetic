/*
 * @Date: 2022-04-11 23:52:05
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-04-11 23:53:17
 * @FilePath: /arithmetic/src/letter-upper-lower/index.test.js
 */
const fun = require('./index.js')

describe('测试修改字符串中字母大小写ACE', () => {
    it('测试一般情况', () => {
        expect(fun('123sdKJdSDFEdsdf')).toBe('123SDkjDsdfeDSDF')
    })
})