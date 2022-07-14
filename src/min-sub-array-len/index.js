/*
 * @Date: 2022-07-14 18:26:05
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-07-14 18:35:22
 * @FilePath: /arithmetic/src/min-sub-array-len/index.js
 */
/**
 * @description: 长度最小子数组
 * @thinking 窗口滑动，使用双指针进行边界确定，如果sum>=target则缩小内部窗口范围，更新最小连续窗口值，直至窗口滑至数组末尾
 * @param {*} nums
 * @param {*} target
 * @return {*}
 */
function minSubArrayLen(nums, target) {
    let l = r = sum = 0
    let len = nums.length
    let res = len + 1
    while (r < len) {
        sum+=nums[r]
        r++
        while (sum >= target) {
            res = Math.min(r-l, res)
            sum -= nums[l]
            l++
        }
    }
    return res > len ? 0 : res
}