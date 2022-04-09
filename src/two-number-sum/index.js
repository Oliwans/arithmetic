/*
 * @Date: 2022-04-09 23:28:37
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-04-09 23:37:00
 * @FilePath: /arithmetic/src/two-number-sum/index.js
 */
/**
 * @description: 找出一个数组中和为N的两个数，双指针解法，时间复杂度O(n) 空间复杂度O(1)
 * @param {Array, n}
 * @return {Array}
 */

function findSumArr(arr, n, start = 0, end = arr.length - 1) {
    if (!arr.length) return []
    if (arr[start] + arr[end] > n) {
        end--
        return findSumArr(arr, n, start, end)
    } else if (arr[start] + arr[end] > n) {
        start++
        return findSumArr(arr, n, start, end)
    } else if (arr[start] + arr[end] === n){
        return start === end ? [arr[start]] : [arr[start], arr[end]]
    } else {
        return []
    }
}

module.exports = findSumArr