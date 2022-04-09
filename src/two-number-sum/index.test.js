/*
 * @Date: 2022-04-09 23:44:04
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-04-09 23:45:13
 * @FilePath: /arithmetic/src/two-number-sum/index.test.js
 */
const findSumArr = require('./index.js')

describe('查找和为n的两个数', () => {
    it('测试一般情况', () => {
        let arr = [1,2,3,4,5,6,7,8]
        let n = 6
        expect(findSumArr(arr, n)).toEqual([1,5])
    })
})