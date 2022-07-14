/*
 * @Date: 2022-04-08 17:14:17
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-07-14 17:57:07
 * @FilePath: /arithmetic/src/sorted-squares/index.js
 */

/**
 * @description 有序数组平方排序
 * @thinking 双指针解法，从左右分别计算平方做比较，大的填充到新的数组中，一次移动双指针，直到指针重合
 * @param {arr, target}
 * @return {index}
 */

 var sortedSquares = function(nums) {
    let left = 0, right = k = nums.length - 1
    let arr = []
    while (left <= right) {
        if (nums[left]*nums[left] >= nums[right]*nums[right]) {
            arr[k] = nums[left]*nums[left]
            left++
        } else if (nums[left]*nums[left] < nums[right]*nums[right]) {
            arr[k] = nums[right]*nums[right]
            right--
        }
        k--
    }
    return arr
};

module.exports = {sortedSquares}
