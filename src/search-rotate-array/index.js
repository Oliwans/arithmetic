/*
 * @Date: 2022-05-18 23:45:54
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-18 23:48:18
 * @FilePath: /arithmetic/src/search-rotete-array/index.js
 */
/**
 * @description: 搜索旋转排序数组
 * @param {*} nums
 * @param {*} target
 * @return {*}
 */
function search(nums, target) {
    if (!nums.length) return -1
    let left = 0,right = nums.length - 1
    while(left <= right) {
        let mid = Math.floor((left + right)/2)
        if (nums[mid] === target) return mid
        if (nums[mid] >= nums[left]) {
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else {
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }
    return -1
}