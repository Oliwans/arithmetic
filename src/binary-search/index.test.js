/*
 * @Date: 2022-04-08 17:49:52
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-04-08 18:17:45
 * @FilePath: /arithmetic/src/binary-search/index.test.js
 */
const {binarySearch,binarySearch2} = require('./index.js')

describe('测试二分查找', () => {
    it('测试循环', () => {
        let arr = [1,23,24,25,26,27,28]
        let target = 27
        expect(binarySearch(arr, target)).toBe(5);
    })
    it('测试递归', () => {
        let arr = [1,23,24,25,26,27,28]
        let target = 23
        expect(binarySearch2(arr, target)).toBe(1);
    })
})