/*
 * @Date: 2022-05-19 00:46:03
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-19 00:46:03
 * @FilePath: /arithmetic/src/max-product/index.js
 */
/**
 * @description: 乘积最大子数组
 * @param {*}
 * @return {*}
 */
 var maxProduct = function(nums) {
    let max = -Infinity, imax = 1, imin = 1
    for (let i = 0; i<nums.length; i++) {
        if (nums[i]<0) {
            let temp = imax
            imax = imin
            imin = temp
        }
        imax = Math.max(imax * nums[i], nums[i])
        imin = Math.min(imin * nums[i], nums[i])
        max = Math.max(max, imax)
    }
    return max
};