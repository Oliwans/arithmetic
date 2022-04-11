/*
 * @Date: 2022-04-11 23:27:09
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-04-12 00:32:09
 * @FilePath: /arithmetic/src/letter-upper-lower/index.js
 */
/**
 * @description: 修改字符串中字母大小写ACE 时间复杂度O(n)
 * @param {str}
 * @return {str}
 */
function changeLetter(str) {
    if (!str) return ''
    let res = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i].charCodeAt() > 64 && str[i].charCodeAt() < 90) {
            res += str[i].toLowerCase()
        } else if (str[i].charCodeAt() > 96 && str[i].charCodeAt() < 122) {
            res += str[i].toUpperCase()
        } else {
            res += str[i]
        }
    }
    return res
}

module.exports = changeLetter