/*
 * @Date: 2022-04-09 23:28:37
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-04-10 00:11:54
 * @FilePath: /arithmetic/src/two-number-sum/index.js
 */
/**
 * @description: 找出一个数组中和为N的两个数，双指针解法，时间复杂度O(n) 空间复杂度O(1)
 * @param {Array, n}
 * @return {Array}
 */

function findSumArr(arr, n, start = 0, end = arr.length - 1) {
    if (!arr.length) return []
    if (arr.length === 1 && arr[0] === n) return [arr[0]]
    if (start === end) {
        return arr[start] === n ? [arr[start]] : []
    } else if (arr[start] + arr[end] > n) {
        end--
        return findSumArr(arr, n, start, end)
    } else if (arr[start] + arr[end] < n) {
        start++
        return findSumArr(arr, n, start, end)
    } else {
        return [arr[start], arr[end]]
    }
}

function findSumArr2(arr, n) {
    if (!arr.length) return []
    if (arr.length === 1 && arr[0] === n) return [arr[0]]
    let start = 0
    let end = arr.length - 1
    while (start < end) {
        if (arr[start] + arr[end] < n) {
            start++
        } else if (arr[start] + arr[end] > n) {
            end--
        } else {
            return [arr[start], arr[end]]
        }
    }
    return arr[start] === n ? [arr[start]] : []
}


module.exports = findSumArr2