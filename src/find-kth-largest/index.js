/*
 * @Date: 2022-05-06 15:23:13
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-06 15:23:14
 * @FilePath: /arithmetic/src/find-kth-largest/index.js
 */
/**
 * @description: 寻找排序后第K大的值
 * @param {*}
 * @return {*}
 */
 var findKthLargest = function(nums, k) {
    if (!nums.length) return null
    arr = nums.sort((a,b) => b - a)
    return arr[k - 1]
};