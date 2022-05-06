/*
 * @Date: 2022-05-06 14:28:47
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-06 14:28:47
 * @FilePath: /arithmetic/src/add-brackets/index.js
 */
/**
 * @description: 括号生成，生成所有有效的括号组合
 * @param {*}
 * @return {*}
 */

 var generateParenthesis = function(n) {
    let ans = []
    helper(0,0,n,'',ans)
    return ans
};

function helper(left, right, n, s, ans) {
    if (left == n && right == n) {
        return ans.push(s)
    }
    if (left < n) helper(left + 1, right, n, s + '(' , ans)
    if (right < left) helper(left, right + 1, n, s + ')' , ans)
}
