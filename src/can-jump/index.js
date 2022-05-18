/*
 * @Date: 2022-05-18 23:59:37
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-18 23:59:37
 * @FilePath: /arithmetic/src/can-jump/index.js
 */
/**
 * @description: 跳跃游戏
 * @param {*}
 * @return {*}
 */
 var canJump = function(nums) {
    if (nums.length < 2 || (nums.length === 2 && nums[0] >= 1)) return true
    if (!nums[0]) return false
    let rightNum = nums.length - 1
    let max = nums[0]
    let i = 0
    while (i <= rightNum - 1) {
        if (i > max) {
            return false;
        }
        max = Math.max(max, i+nums[i])
        if (max >= rightNum) return true
        i++
    }
    return false
};