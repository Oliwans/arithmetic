/*
 * @Date: 2022-05-19 00:00:47
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-19 00:00:47
 * @FilePath: /arithmetic/src/merge-intervals/index.js
 */
/**
 * @description: 合并区间
 * @param {*}
 * @return {*}
 */
 var merge = function(intervals) {
    if (intervals.length <= 1) return intervals
    let res = []
    intervals.sort((a,b) => a[0] - b[0])
    let temp = intervals[0]
    for (let i = 1; i< intervals.length; i++) {
        if (temp[1] >= intervals[i][0]) {
            temp[1] = Math.max(temp[1], intervals[i][1])
        } else {
            res.push(temp)
            temp = intervals[i]
        }
    }
    res.push(temp)
    return res
};