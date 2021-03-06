/*
 * @Date: 2022-05-06 15:12:56
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-09 00:50:28
 * @FilePath: /arithmetic/src/three-number-sum/index.js
 */
/**
 * @description: 三数之和，排序，去掉大于0后边的情况
 * 首先排序，去除大于0的情况，其次如果两个相邻的数相同，跳过，然后遍历寻找相加等于0的三个数，有相邻的数也跳过
 * @param {[-1,0,1,2,-1,-4]}
 * @return {[[-1,-1,2],[-1,0,1]]}
 */

 var threeSum = function(nums) {
    let res = []
    let len = nums.length
    if (!nums || nums.length < 3) return res
    nums.sort((a,b) => a - b)
    for (let i = 0; i < len; i++) {
        if(nums[i] > 0) break;
        if (i>0 && nums[i-1] === nums[i]) continue
        let l = i + 1
        let r = len - 1
        while(l<r) {
            const sum = nums[i] + nums[l] + nums[r]
            if (sum === 0) {
                res.push([nums[i], nums[l], nums[r]])
                while(l<r && nums[l] == nums[l+1]) l++
                while(l<r && nums[r] == nums[r-1]) r--
                l++
                r--
            } else if(sum<0) {
                l++
            } else if(sum>0) {
                r--
            }
        }
    }
    return res
};