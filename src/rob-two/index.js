/*
 * @Date: 2022-05-19 00:27:04
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-19 00:27:04
 * @FilePath: /arithmetic/src/rob/index.js
 */
/**
 * @description: 打家劫舍
 * @param {*}
 * @return {*}
 */
 var rob = function(root) {
    function helper(root) {
        if (!root) return [0,0]
        const l = helper(root.left)
        const r = helper(root.right)
        const yes = root.val + l[1] + r[1]
        const no = Math.max(l[0],l[1]) + Math.max(r[0],r[1])
        return [yes, no]
    }
    const [yes,no] = helper(root)
    return Math.max(yes,no)
};