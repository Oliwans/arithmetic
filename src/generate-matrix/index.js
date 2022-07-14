/*
 * @Date: 2022-07-14 20:23:12
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-07-14 20:42:29
 * @FilePath: /arithmetic/src/generate-matrix/index.js
 */
/**
 * @description: 螺旋矩阵
 * @thinking 模拟的方式添加，关键是控制介数offset每重新绘制一次左右上下各缩减2个元素，奇数时多个中间值arr[mid][mid],其他关键参数起始节点，count数字，初始化二维数组，所需要旋转圈数
 * @param {*} n
 * @return {*}
 */
function generateMatrix(n) {
    let startX = startY = 0
    let offset = 1
    let loop = mid = Math.floor(n/2)
    let arr = new Array(n).fill(0).map(() => new Array(n).fill(0))
    let count = 1
    while (loop > 0) {
        let row = startX
        let col = startY
        for (; col < startY + n - offset; col++) {
            arr[row][col] = count
            count++
        }
        for (; row < startX + n - offset; row++) {
            arr[row][col] = count
            count++
        }
        for (; col > startY; col--) {
            arr[row][col] = count
            count++
        }
        for (; row > startX; row--) {
            arr[row][col] = count
            count++
        }
        startX++
        startY++
        offset+=2
        loop--
    }
    if (n%2 === 1) {
        arr[mid][mid] = count
    }
    return arr
}