/*
 * @Date: 2022-04-10 23:09:57
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-04-15 13:25:19
 * @FilePath: /arithmetic/src/continue-number/index.js
 */
/**
 * @description: 输出连续字符及次数 递归 时间复杂度O(n) 空间复杂度O(1)
 * @param {str}
 * @return {obj}
 */
function continueNum(str) {
    let res = {
        char: '',
        count: 0
    }
    if (!str) return res
    let i = 0
    let tempLength
    function whileFun() {
        tempLength = 1
        while (str[i] === str[i+1]) {
            tempLength++
            i++
        }
        res = {
            char: tempLength > res.count ? str[i] : res.char,
            count: tempLength > res.count ? tempLength : res.count
        }
    }
    while (i < str.length - 1) {
        whileFun()
        i += 1
    }
    return res
}
/**
 * @description: 输出连续字符及次数 跳步 时间复杂度O(n) 空间复杂度O(1)
 * @param {str}
 * @return {obj}
 */
function continueNum2(str) {
    let res = {
        char: '',
        count: 0
    }
    if (!str) return res
    let tempLength
    for (let i = 0; i<str.length; i++) {
        tempLength = 0
        for(let j = i; j<str.length; j++) {
            if (str[i] === str[j]) {
                tempLength++
            }
            if (str[i] !== str[j] || j === str.length -1) {
                if (tempLength > res.count) {
                    res = {
                        char: str[i],
                        count: tempLength
                    }
                }
                if (i < str.length - 1) { // 避免无限循环
                    i = j - 1
                }
                break
            }
        }
    }
    return res
}
/**
 * @description: 输出连续字符及次数 双指针 时间复杂度O(n) 空间复杂度O(1)
 * @param {str}
 * @return {obj}
 */
function continueNum3(str) {
    let res = {
        char: '',
        count: 0
    }
    if (!str) return res
    let tempLength = i = j =0
    for (; i<str.length; i++) {
        if (str[i] === str[j]) {
            tempLength++
        }
        if (str[i] !== str[j] || i === str.length - 1) {
            if (tempLength > res.count) {
                res = {
                    char: str[j],
                    count: tempLength
                }
            }
            tempLength = 0
            if (i < str.length - 1) {
                j = i
                i--
            }
        }
    }
    return res
}
module.exports = continueNum3