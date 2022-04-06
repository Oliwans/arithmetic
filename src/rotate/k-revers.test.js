/*
 * @Date: 2022-04-06 17:26:11
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-04-06 23:05:44
 * @FilePath: /arithmetic/src/rotate/k-revers.test.js
 */
const rotate = require('./k-revers.js')

describe('测试K值翻转', () => {
    it('测试空数组情况', () => {
        let arr = [1,2,3,4,5,6,7,8]
        let k = 6
        expect(rotate(arr, k)).toEqual([3,4,5,6,7,8,1,2])
    })
})