/*
 * @Date: 2022-05-19 00:49:19
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-19 00:49:19
 * @FilePath: /arithmetic/src/word-break/index.js
 */
/**
 * @description: 单词拆分
 * @param {*}
 * @return {*}
 */
 var wordBreak = function(s, wordDict) {
    let len = s.length
    const dp = new Array(len+1).fill(false)
    dp[0] = true
    for (let i = 0; i<= len; i++) {
        for (let j = 0; j < wordDict.length; j++) {
            if (dp[i] === true) continue
            if (i >= wordDict[j].length) {
                if (dp[i - wordDict[j].length] === false) continue
                if (s.slice(i-wordDict[j].length, i) === wordDict[j]) dp[i] = true
            }
        }
    }
    return dp[s.length]
};