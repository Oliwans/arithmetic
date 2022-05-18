/*
 * @Date: 2022-05-18 23:49:56
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-18 23:49:57
 * @FilePath: /arithmetic/src/combination-sum/index.js
 */
/**
 * @description: 数组总和
 * @param {*}
 * @return {*}
 */
 var combinationSum = function(candidates, target) {
    const res = []
    let len = candidates.length - 1
    function dfs(start,temp,sum) {
        if (sum >= target) {
            if (sum === target) {
                res.push(temp.slice())
            }
            return
        }
        for (let i = start; i<=len; i++) {
            temp.push(candidates[i])
            dfs(i,temp,sum+candidates[i])
            temp.pop()
        }
    }
    dfs(0,[],0)
    return res
};