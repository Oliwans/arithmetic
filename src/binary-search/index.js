/*
 * @Date: 2022-04-08 17:14:17
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-07-14 17:24:32
 * @FilePath: /arithmetic/src/binary-search/index.js
 */

/**
 * @description 二分查找，时间复杂度O(logn) 空间复杂度O(logn)
 * @thinking 二分查找，通过中间值与target比较，不断缩小边界范围，直到找到元素
 * @param {arr, target}
 * @return {index}
 */

function binarySearch(arr, target) {
    let len = arr.length
    if (!len) return -1
    let start = 0
    let end = arr.length - 1
    while (start <= end) {
        let mid = Math.floor((start+end)/2)
        if (target > arr[mid]) {
            start = mid + 1
        } else if (target < arr[mid]) {
            end = mid - 1
        } else {
            return mid
        }
    }
    return -1
}

function binarySearch2(arr, target, start = 0, end = arr.length) {
    let len = arr.length
    if (!len) return -1
    let mid = Math.floor((start+end)/2)
    if (target > arr[mid]) {
        return binarySearch2(arr, target, mid + 1, end)
    } else if (target < arr[mid]) {
        return binarySearch2(arr, target, start, mid - 1)
    } else {
        return mid
    }
}
module.exports = {binarySearch,binarySearch2}
