/*
 * @Date: 2022-05-06 15:26:52
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-09 00:42:36
 * @FilePath: /arithmetic/src/sales-stocks/index.js
 */
/**
 * @description: 买卖股票最佳时机
 * @param {[6,2,5,7,1,4]}
 * @return {5}
 */
 var maxProfit = function(prices) {
    if (!prices) return prices
    let res = 0
    let min = prices[0]
    for (let i = 0; i < prices.length; i++) {
       if (prices[i] < min) {
           min = prices[i]
       } else {
           res = Math.max(res, prices[i] - min)
       }
    }
    return res
};