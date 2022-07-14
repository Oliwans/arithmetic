/*
 * @Date: 2022-04-08 17:14:17
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-07-14 17:23:15
 * @FilePath: /arithmetic/src/remove-item/index.js
 */

/**
 * @description 移除数组中相同的元素，要求空间复杂度O(1),直接修改原数组
 * @thinking 暴力解法双层循环时间复杂度较高，双指针可以把时间复杂度控制到O(n)
 * @param {arr, target}
 * @return {index}
 */

function removeElement(arr, target) {
    let k = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== target) {
            arr[k] = arr[i]
            k++
        }
    }
    return k
}

module.exports = {removeElement}
