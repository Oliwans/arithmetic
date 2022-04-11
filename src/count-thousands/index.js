/*
 * @Date: 2022-04-11 23:26:09
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-04-12 00:34:29
 * @FilePath: /arithmetic/src/count-thousands/index.js
 */
/**
 * @description: 数字千分位划分 时间复杂度O(n) 但操作string比array要略快
 * @param {number}
 * @return {string}
 */
function countThousands(num) {
    if (num < 1000) return num+''
    let arr = num.toString().split('').reverse()
    let res = ''
    res = arr.reduce((prev, value, index) => {
        if (index % 3 === 0 && prev) {
            return value + ',' + prev
        }
        return value + prev
    }, '')
    return res
}

function countThousands2(num) {
    if (num < 1000) return num+''
    let str = num.toString()
    let res = ''
    for (let i = str.length - 1; i >= 0; i--) {
        if ((str.length - i) % 3 === 0 && i !== 0) {
            res = ',' + str[i] + res
        } else {
            res = str[i] + res
        }
    }
    return res
}

module.exports = countThousands2
