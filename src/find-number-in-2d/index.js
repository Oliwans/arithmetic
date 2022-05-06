/*
 * @Date: 2022-05-06 14:56:14
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-06 14:56:14
 * @FilePath: /arithmetic/src/find-number-in-2d/index.js
 */
/**
 * @description: 查找数字是否在二维数组中，左下角开始查找
 * @param {*}
 * @return {*}
 */

 var findNumberIn2DArray = function(matrix, target) {
    if (!matrix.length) return false
    let m = matrix.length - 1
    let n = 0
    while (m >=0 && n < matrix[0].length) {
        if (matrix[m][n] === target) return true
        else if (matrix[m][n] > target) m--
        else n++
    }
    return false
};
