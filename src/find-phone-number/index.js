/*
 * @Date: 2022-05-06 14:38:25
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-06 14:39:45
 * @FilePath: /arithmetic/src/find-phone-number/index.js
 */
/**
 * @description: 查找电话号码所有的组合，回溯
 * @param {*}
 * @return {*}
 */
 var letterCombinations = function(digits) {
    if (!digits.length) return []
    let numsMap =new Map([
        ['0',''],
        ['1',''],
        ['2','abc'],
        ['3','def'],
        ['4','ghi'],
        ['5','jkl'],
        ['6','mno'],
        ['7','pqrs'],
        ['8','tuv'],
        ['9','wxyz'],
    ])
    let res = []
    dfs('',digits)
    return res
    function dfs (str, digit) {
        if (!digit.length) res.push(str)
        else {
            let numstr = numsMap.get(digit[0])
            for (let i = 0; i < numstr.length; i++) {
                str += numstr[i]
                dfs(str, digit.slice(1))
                str = str.slice(0, -1) // 回溯
            }
        }
    }
};

