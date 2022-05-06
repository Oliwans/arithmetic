/*
 * @Date: 2022-05-06 14:44:24
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-06 14:44:25
 * @FilePath: /arithmetic/src/max-water/index.js
 */
/**
 * @description: 最大盛水容器，双指针
 * @param {*}
 * @return {*}
 */

 var maxArea = function(height) {
    let i = 0
    let len = j = height.length - 1
    let res = 0
    while (i < j) {
        if (height[i] <= height[j]) {
            res = Math.max(res, height[i] * len)
        } else {
            res = Math.max(res, height[j] * len)
        }
        if (height[i] <= height[j]) {
            i++
            len--
        } else {
            j--
            len--
        }
    }
    return res
};
