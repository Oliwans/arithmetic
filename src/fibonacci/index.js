/*
 * @Date: 2022-04-10 12:37:48
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-04-10 19:04:56
 * @FilePath: /arithmetic/src/fibonacci/index.js
 */

/**
 * @description: 斐波那契数列求第n个数 时间复杂度O(n) 空间复杂度O(1)
 * @param {*}
 * @return {*}
 */
function fibonacci(n) {
    if (!n) return 0
    if (n === 1) return 1
    let n1 = 0
    let n2 = 1
    let res;
    for (let i = 2; i <= n; i++) {
        res = n1 + n2
        n1 = n2
        n2 = res
    }
    return res
}

module.exports = fibonacci