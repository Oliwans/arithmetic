/*
 * @Date: 2022-04-11 20:36:40
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-04-11 21:12:22
 * @FilePath: /arithmetic/src/find-symmetric-num/index.js
 */
/**
 * @description: 查找对称数（回文） 整体都为O(n)
 * @param {*}
 * @return {*}
 */

// 操作数组
function findSymmetricNum1(max) {
    if (!max && max !== 0) return max
    let result = []
    for (let i = 0; i <= max; i++) {
        if (i.toString() === i.toString().split('').reverse().join('')) {
            result.push(i)
        }
    }
    return result
}

// 操作字符串
function findSymmetricNum2(max) {
    if (!max && max !== 0) return max
    let result = []
    for (let i = 0; i <= max; i++) {
        let str = i.toString()
        let start = 0
        let end = str.length - 1
        let flag = true
        while (start < end) {
            if (str[start] !== str[end]) {
                flag = false
                break
            }
            start++
            end--
        }
        if (flag) result.push(i)
    }
    return result
}

// 操作数字
function findSymmetricNum3(max) {
    if (!max && max !== 0) return max
    let result = []
    for (let i = 0; i <= max; i++) {
        let n = i
        let rev = 0
        while (n > 0) {
            rev = rev * 10 + n % 10
            n = Math.floor(n / 10)
        }
        if (i === rev) result.push(i)
    }
    return result
}

module.exports = findSymmetricNum3
