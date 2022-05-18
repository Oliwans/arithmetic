/*
 * @Date: 2022-05-19 00:33:12
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-19 00:33:12
 * @FilePath: /arithmetic/src/find-duplicate/index.js
 */
/**
 * @description: 寻找重复数
 * @param {*}
 * @return {*}
 */
 var findDuplicate = function(nums) {
    let map = new Map()
    for (let i = 0; i< nums.length; i++) {
        if (!map.get(nums[i])) {
            map.set(nums[i], true)
        } else {
            return nums[i]
        }
    }
    return null
};
