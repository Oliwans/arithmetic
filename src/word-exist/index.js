/*
 * @Date: 2022-05-19 00:11:13
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-19 00:11:14
 * @FilePath: /arithmetic/src/word-exist/index.js
 */
/**
 * @description: 单词搜索
 * @param {*}
 * @return {*}
 */
 var exist = function(board, word) {
    const h = board.length, w = board[0].length
    const directions = [[0,1], [0, -1], [1,0], [-1,0]]
    const visited = new Array(h);
    for (let i = 0; i < visited.length; ++i) {
        visited[i] = new Array(w).fill(false);
    }
    const check = (i,j,k) => {
        if (board[i][j] !== word.charAt(k)) {
            return false
        } else if (k === word.length - 1) {
            return true
        }
        visited[i][j] = true;
        let result = false;
        for(const [dx, dy] of directions) {
            let x = i + dx, y = j + dy;
            if (x >= 0 && x < h && y >= 0 && y < w) {
                if (!visited[x][y]) {
                    const flag = check(x, y, k + 1);
                    if (flag) {
                        result = true;
                        break;
                    }
                }
            }
        }
        visited[i][j] = false;
        return result;
    }
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            const flag = check(i,j,0)
            if (flag) {
                return true;
            }
        }
    }
    return false
};