/*
 * @Date: 2022-05-06 15:44:32
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-06 15:44:32
 * @FilePath: /arithmetic/src/longest-substring/index.js
 */
/**
 * @description: 求不重复的最长子字符串长度
 * @param {*}
 * @return {*}
 */

 var lengthOfLongestSubstring = function(s) {
    let newSet = new Set()
    let rk = 0
    let count = 0
    for(let i = 0; i <= s.length - 1; i++) {
        if (i !== 0) {
            newSet.delete(s[i - 1])
        }
        while (!newSet.has(s[rk]) && rk <= s.length - 1) {
            newSet.add(s[rk])
            rk++
        }
        count = Math.max(count, rk - i)
    }
    return count
 };