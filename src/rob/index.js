/*
 * @Date: 2022-05-19 00:45:08
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-19 00:45:08
 * @FilePath: /arithmetic/src/rob/index.js
 */
/**
 * @description: 打家劫舍
 * @param {*}
 * @return {*}
 */

 var rob = function(nums) {
    let len = nums.length
    let dp = new Array(nums.length).fill(0)
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0],nums[1])
    for (let i = 2; i<len; i++) {
        dp[i] = Math.max(dp[i-1], dp[i-2]+nums[i])
    }
    return dp[len-1]
};
