/*
 * @Date: 2022-05-19 00:05:05
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-19 00:05:06
 * @FilePath: /arithmetic/src/min-path-sum/index.js
 */
/**
 * @description: 最小路径和
 * @param {*}
 * @return {*}
 */
 var minPathSum = function(grid) {
    if (!grid.length) return 0
    let m = grid.length, n = grid[0].length
    const dp = new Array(grid.length).fill(0).map(() => new Array(grid[0].length).fill(0))
    dp[0][0] = grid[0][0]
    for (let i = 0; i<m; i++) {
        for (let j = 0; j<n; j++) {
            if (i === 0 && j !== 0) {
                dp[0][j] = dp[0][j - 1] + grid[0][j]
            }
            if (i !== 0 && j === 0) {
                dp[i][0] = dp[i-1][0] + grid[i][0]
            }
            if (i !== 0 && j !== 0) {
                dp[i][j] = Math.min(dp[i-1][j] + grid[i][j],dp[i][j - 1] + grid[i][j])
            }
        }
    }
    return dp[m-1][n-1]
};