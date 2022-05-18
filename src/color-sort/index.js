/*
 * @Date: 2022-05-19 00:06:59
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-19 00:07:00
 * @FilePath: /arithmetic/src/color-sort/index.js
 */
/**
 * @description: 颜色分类
 * @param {*}
 * @return {*}
 */
 var sortColors = function(nums) {
    let p0 = 0, cur = 0, p2 = nums.length - 1
    while (cur <= p2) {
        if (nums[cur] === 0) {
            [nums[p0],nums[cur]] = [nums[cur],nums[p0]]
            cur++
            p0++
        } else if (nums[cur] === 1) {
            cur++
        } else {
            [nums[p2],nums[cur]] = [nums[cur],nums[p2]]
            p2--
        }
    }
}