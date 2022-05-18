/*
 * @Date: 2022-05-19 00:26:07
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-19 00:26:07
 * @FilePath: /arithmetic/src/top-k-frequent/index.js
 */
/**
 * @description: 前k个高频元素
 * @param {*}
 * @return {*}
 */
 var topKFrequent = function(nums, k) {
    if (!nums.length) return []
    let map = new Map()
    let arr = []
    for (let i = 0; i<nums.length; i++) {
        if (!map.get(nums[i])) {
            map.set(nums[i], 1)
        } else {
            map.set(nums[i], map.get(nums[i])+1)
        }
    }
    let newArr = Array.from(map).sort((a,b) => b[1] - a[1])
    return newArr.slice(0, k).map(item => item[0])
};