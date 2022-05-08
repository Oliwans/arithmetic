/*
 * @Date: 2022-05-06 15:44:32
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-08 22:41:10
 * @FilePath: /arithmetic/src/longest-substring/index.js
 */
/**
 * @description: 求不重复的最长子字符串长度
 * 利用双指针i外部循环，利用set.has判断是否存在重复字符，rk作为内循环循环整个字符串，当i新增时删掉set中的上一个元素，通过rk - i与原
 * 长度做比较来获取最大长度
 * @param {abcadefeda}
 * @return {6}
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