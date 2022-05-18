/*
 * @Date: 2022-05-19 00:03:44
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-19 00:03:44
 * @FilePath: /arithmetic/src/unique-paths/index.js
 */
/**
 * @description: 不同路径
 * @param {*}
 * @return {*}
 */
 var uniquePaths = function(m, n) {
    let f = new Array(m).fill(0).map(() => new Array(n).fill(0))
    for(let i = 0; i < m; i++) {
        f[i][0] = 1
    }
    for(let i = 0; i < n; i++) {
        f[0][i] = 1
    }
    for (let i = 1; i< m; i++) {
        for (let j = 1; j<n; j++) {
            f[i][j] = f[i-1][j] + f[i][j-1]
        }
    }
    return f[m-1][n-1]
};