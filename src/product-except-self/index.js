/*
 * @Date: 2022-05-19 00:36:33
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-19 00:36:33
 * @FilePath: /arithmetic/src/product-except-self/index.js
 */
/**
 * @description: 除自身以外的数的乘积
 * @param {*} nums
 * @return {*}
 */
var productExceptSelf = function(nums) {
    let left = [], right = [], ans = []
    left[0] = 1 
    right[nums.length - 1] = 1
    for (let i = 0; i<nums.length-1; i++) {
        left[i+1] = left[i] * nums[i]
    }
    for (let i = nums.length - 1; i>-1; i--) {
        right[i-1] = right[i] * nums[i]
    }
    for (let i = 0; i<nums.length; i++) {
        ans[i] = left[i] * right[i]
    }
    return ans
};