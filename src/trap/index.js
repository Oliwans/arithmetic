/*
 * @Date: 2022-05-18 23:51:21
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-18 23:51:21
 * @FilePath: /arithmetic/src/trap/index.js
 */
/**
 * @description: 接雨水
 * @param {*}
 * @return {*}
 */
 var trap = function(height) {
    let res = 0
    let left = 0, right = height.length - 1
    let maxl = maxr = 0
    while (left < right) {
        maxl = Math.max(maxl, height[left])
        maxr = Math.max(maxr, height[right])
        if (maxl < maxr) {
            res+=(maxl - height[left])
            left++
        } else {
            res+=(maxr - height[right])
            right--
        }
    }
    return res
}