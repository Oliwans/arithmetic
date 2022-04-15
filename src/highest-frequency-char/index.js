/*
 * @Date: 2022-04-15 13:26:01
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-04-15 13:28:23
 * @FilePath: /arithmetic/src/highest-frequency-char/index.js
 */

/**
 * @description: 输出出现频率最高的字符 时间复杂度O(n) 空间复杂度O(1)
 * @param {str}
 * @return {obj}
 */
function highestFrequencyChar(str) {
    let res = {
        value: '',
        count: 0
    }
    let map = new Map()
    for (let i = str.length - 1; i >= 0; i--) {
        let n = map.get(str[i])
        if (map.has(str[i])) {
            map.set(str[i], n + 1)
            if (n + 1 >= res.count) {
                res.count = n + 1
                res.value = str[i]
            } else if (res.value === str[i]) {
                res.count = n + 1
            }
        } else {
            map.set(str[i], 1)
            if (res.count <= 1) {
                res = {
                    value: str[i],
                    count: 1
                }
            }
        }
    }
    return res
}

module.exports = highestFrequencyChar