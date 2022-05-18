/*
 * @Date: 2022-05-18 23:52:27
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-18 23:52:28
 * @FilePath: /arithmetic/src/permute/index.js
 */
/**
 * @description: 全排列
 * @param {*}
 * @return {*}
 */
 var permute = function(nums) {
    let res = []
    function dsp(temp) {
        if (temp.length === nums.length) {
            res.push([...temp])
            return
        }
        for (let i = 0; i<nums.length; i++) {
            if (temp.includes(nums[i])) {
                continue
            }
            temp.push(nums[i])
            dsp(temp)
            temp.pop()
        }
    }
    dsp([])
    return res
};