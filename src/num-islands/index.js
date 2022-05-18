/*
 * @Date: 2022-05-19 00:43:20
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-19 00:43:21
 * @FilePath: /arithmetic/src/num-islands/index.js
 */
/**
 * @description: 岛屿数量
 * @param {*}
 * @return {*}
 */
 var numIslands = function(grid) {
    function dfs(i,j) {
        if (i<0 || i>=m || j<0 || j>=n || grid[i][j] === '0') {
            return
        }
        grid[i][j] = '0'
        dfs(i+1,j)
        dfs(i,j+1)
        dfs(i-1,j)
        dfs(i,j-1)
    }
    let m = grid.length,n = grid[0].length
    let res = 0
    for (let i = 0; i<m; i++) {
        for (let j = 0; j<n; j++) {
            if (grid[i][j] === '1') {
                dfs(i, j)
                res++
            }
        }
    }
    
    return res
};
