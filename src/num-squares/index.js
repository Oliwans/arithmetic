/*
 * @Date: 2022-05-19 00:34:03
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-19 00:34:03
 * @FilePath: /arithmetic/src/num-squares/index.js
 */
/**
 * @description: 完全平方数
 * @param {*}
 * @return {*}
 */
 var numSquares = function(n) {
    let dp = new Array(n).fill(0)
    for (let i = 1; i<= n; i++) {
        dp[i] = i
        for (let j = 1; i-j*j>=0; j++) {
            dp[i] = Math.min(dp[i],dp[i-j*j] + 1)
        }
    }
    return dp[n]
};