/*
 * @Date: 2022-05-19 00:28:21
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-19 00:28:21
 * @FilePath: /arithmetic/src/coin-change/index.js
 */
/**
 * @description: 零钱兑换
 * @param {*}
 * @return {*}
 */
 var coinChange = function(coins, amount) {
    let dp = new Array(amount+1).fill(Infinity)
    dp[0] = 0
    for (let i = 1; i<=amount; i++) {
        for (let coin of coins) {
            if (i - coin >= 0) dp[i] = Math.min(dp[i], dp[i-coin]+1)
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
};