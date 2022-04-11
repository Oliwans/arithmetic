/*
 * @Date: 2022-04-11 20:38:30
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-04-11 20:40:14
 * @FilePath: /arithmetic/src/sortCollection/index.test.js
 */
const quickSort = require('./index.js')

describe('快排测试', () => {
    it('测试一般情况', () => {
        let arr = [1,2,3,4,5,6,7,8]
        let n = 6
        expect(quickSort([13,2,1,6,4,7,5])).toEqual([1, 2, 4, 5, 6, 7, 13])
    })
})