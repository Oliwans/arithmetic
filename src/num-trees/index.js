/*
 * @Date: 2022-05-19 00:10:03
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-07-12 15:19:13
 * @FilePath: /arithmetic/src/num-trees/index.js
 */
/**
 * @description: 不同的二叉搜索树
 * @param {*}
 * @return {*}
 */
 var numTrees = function(n) {
    const dp = new Array(n+1).fill(0)
    dp[0] = 1
    dp[1] = 1
    for(let i=2;i<n+1;i++){
        for(let j=1;j<i+1;j++){
            dp[i] += dp[j-1] * dp[i-j]
        }
    }
    return dp[n]
};