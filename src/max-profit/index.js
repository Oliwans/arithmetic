/*
 * @Date: 2022-05-19 00:30:00
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-19 00:30:00
 * @FilePath: /arithmetic/src/max-profit/index.js
 */
/**
 * @description: 买卖股票最佳时机含冷冻期
 * @param {*}
 * @return {*}
 */
 var maxProfit = function(prices) {
    if(prices.length<2) return 0
    let dp = new Array(prices.length).fill(0).map(() => new Array(2).fill(0))
    dp[0][0] = 0
    dp[0][1] = -prices[0]
    dp[1][0] = Math.max(dp[0][0], dp[0][1] + prices[1])
    dp[1][1] = Math.max(dp[0][1], dp[0][0] - prices[1])
    for (let i = 2; i< prices.length; i++) {
        dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i])
        dp[i][1] = Math.max(dp[i-1][1], dp[i-2][0] - prices[i])
    }
    return dp[prices.length - 1][0]
};