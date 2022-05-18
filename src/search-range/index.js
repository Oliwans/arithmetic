/*
 * @Date: 2022-05-18 23:47:33
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-18 23:47:33
 * @FilePath: /arithmetic/src/search-range/index.js
 */
/**
 * @description: 在数组中查找元素第一个和最后一个位置
 * @param {*}
 * @return {*}
 */
 var searchRange = function(nums, target) {
    if (nums.length === 1 && nums[0] === target) return [0,0]
    if (!nums.length || (nums.length === 1 && nums[0] !== target)) return [-1, -1]
    let left = 0, right = nums.length - 1,start, end
    if (nums[left] > target || nums[right] < target) return [-1,-1]
    while(left <= right) {
        let mid = Math.floor((left+right)/2)
        if (target < nums[mid]) {
            right = mid - 1
        } else if (target > nums[mid]) {
            left = mid + 1
        } else if (nums[mid] === target) {
            start = end = mid
            while(nums[start-1] === target) {
                start--
            }
            while(nums[end+1] === target) {
                end++
            }
            return [start, end]
        }
    }
    return [-1,-1]
};