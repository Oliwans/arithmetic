/*
 * @Date: 2022-04-11 21:12:41
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-04-11 21:13:58
 * @FilePath: /arithmetic/src/find-symmetric-num/index.test.js
 */

const findSymmetric = require('./index.js')

describe('快排测试', () => {
    it('测试一般情况', () => {
        expect(findSymmetric(88)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88])
    })
})