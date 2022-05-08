/*
 * @Date: 2022-05-06 15:59:10
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-08 21:53:04
 * @FilePath: /arithmetic/index.js
 */
/**
 * @description: 合并两个数组，并排序
 * @param {*} arr1
 * @param {*} arr2
 * @return {*}
 */
function setArr(arr1, arr2) {
    let i = j = 0
    let len = Math.max(arr1.length, arr2.length)
    let res = []
    while((i < len || j < len) && (arr1[i] || arr2[j])) {
        if (arr1[i] >= arr2[j] || !arr1[i]) {
            res.push(arr2[j])
            j++
        } else if (arr1[i] <= arr2[j] || !arr2[j]) {
            res.push(arr1[i])
            i++
        }
    }
    return res
}