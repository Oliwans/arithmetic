/*
 * @Date: 2022-05-19 00:22:11
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-19 00:22:11
 * @FilePath: /arithmetic/src/longest-consecutive/index.js
 */
/**
 * @description: 数组最长连续序列长度
 * @param {*}
 * @return {*}
 */
 var longestConsecutive = function(nums) {
    if (nums.length < 2) return nums.length
    let newSet = new Set(nums)
    let res = 0
    for (let i of newSet) {
        if (newSet.has(i - 1)) continue;
        let count = 1
        while (newSet.has(i + 1)) {
            newSet.delete(i+1)
            i++
            count++
        }
       res = Math.max(res, count)
    }
    return res
}