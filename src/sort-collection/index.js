/*
 * @Date: 2022-04-11 18:37:19
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-04-11 20:53:25
 * @FilePath: /arithmetic/src/sort-collection/index.js
 */
/**
 * @description: 快速排序 时间复杂度 O(nlogn)
 * @param {arr}
 * @return {arr}
 */
function quickSort(arr) {
    if (!arr || !arr.length) return []
    if (arr.length === 1) return arr
    let arrNew = arr.slice(1)
    let flag = arr[0]
    let left = []
    let right = []
    arrNew.forEach(e => {
        e >= flag ? right.push(e) : left.push(e)
    });
    return quickSort(left).concat([flag],quickSort(right))
}

module.exports = quickSort
