/*
 * @Date: 2022-05-19 00:08:23
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-19 00:08:23
 * @FilePath: /arithmetic/src/sub-sets/index.js
 */
/**
 * @description: 查找数组中所有子集
 * @param {*}
 * @return {*}
 */
 var subsets = function(nums) {
    let res = []
    function dsp(temp, start) {
        res.push(temp.slice(0))
        for (let i = start; i<nums.length; i++) {
            temp.push(nums[i])
            dsp(temp, i+1)
            temp.pop()
        }
    }
    dsp([],0)
    return res
};
