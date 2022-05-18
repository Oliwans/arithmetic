/*
 * @Date: 2022-05-19 00:31:07
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-19 00:31:07
 * @FilePath: /arithmetic/src/length-of-LIS/index.js
 */
/**
 * @description: 最长递增子序列
 * @param {*}
 * @return {*}
 */
 var lengthOfLIS = function(nums) {
    let dp = new Array(nums.length).fill(1)
    for (let i=0; i< nums.length;i++) {
        for (let j=0;j<=i; j++) {
            if (nums[j]<nums[i]) {
                dp[i] = Math.max(dp[i],dp[j] + 1)
            }
        }
    }
    return Math.max(...dp)
};