/*
 * @Date: 2022-05-06 15:36:12
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-06 15:36:12
 * @FilePath: /arithmetic/src/two-number-sum-index/index.js
 */
var twoSum = function(nums, target) {
    if (!nums.length) return []
    if (nums.length === 1 && nums[0] === target) return [0]
    if (nums.length === 2 && nums[0] + nums[1] === target) return [0, 1]
    let newArr = [...nums]
    newArr.sort((a,b) => a - b)
    let start = 0
    let res = []
    let end= newArr.length - 1
    while (start < end) {
        if (newArr[start] + newArr[end] > target) {
            end--
        } else if (newArr[start] + newArr[end] < target) {
            start++
        } else {
            res.push(nums.indexOf(newArr[start]))
            nums[nums.indexOf(newArr[start])] = null
            res.push(nums.indexOf(newArr[end]))
            return res
        }
    }
};