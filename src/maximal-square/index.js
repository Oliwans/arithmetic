/*
 * @Date: 2022-05-19 00:39:09
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-19 00:39:09
 * @FilePath: /arithmetic/src/maximal-square/index.js
 */
/**
 * @description: 最大正方形
 * @param {*}
 * @return {*}
 */
 var maximalSquare = function(matrix) {
    if(!matrix.length) return 0;
    let maxLen = 0
    let dp = new Array(matrix.length+1).fill(0).map(() => new Array(matrix[0].length+1).fill(0))
    for (let i = 1; i<dp.length; i++) {
        for (let j = 1; j<dp[0].length; j++) {
            if (matrix[i-1][j-1] === '1') {
                dp[i][j] = Math.min(dp[i][j-1],dp[i-1][j-1],dp[i-1][j]) + 1
            }
            maxLen = Math.max(maxLen, dp[i][j])
        }
    }
    return maxLen * maxLen
};