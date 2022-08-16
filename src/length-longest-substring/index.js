/*
 * @Date: 2022-05-19 00:48:01
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-08-16 12:06:59
 * @FilePath: /arithmetic/src/length-longest-substring/index.js
 */
/**
 * @description: 无重复字符最长子串， 双指针，用set记录重复，rk从i起点开始遍历，遇到重复停止，更新count值
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