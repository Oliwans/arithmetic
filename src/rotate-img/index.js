/*
 * @Date: 2022-05-18 23:56:12
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-18 23:56:12
 * @FilePath: /arithmetic/src/rotate-img/index.js
 */
/**
 * @description: 旋转图像
 * @param {*}
 * @return {*}
 */
 var rotate = function(matrix) {
    const n = matrix.length;
    // 先水平翻转
    for(let i = 0; i < n / 2; i++) {
        for(let j = 0; j < n; j++) {
            [matrix[i][j], matrix[n - i - 1][j]] = [matrix[n - i - 1][j], matrix[i][j]]
        }
    }
    // 再对角线翻转
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < i; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }
};