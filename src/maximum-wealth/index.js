/*
 * @Date: 2022-05-06 15:16:02
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-06 15:16:02
 * @FilePath: /arithmetic/src/maximum-wealth/index.js
 */
/**
 * @description: 最富有资产总数
 * @param {*} accounts
 * @return {*}
 */
var maximumWealth = function(accounts) {
    let res  = 0
    if (!accounts.length) return null
    accounts.forEach(item => {
        let count = 0
        item.forEach(e => {
            count+=e
            if (count > res) {
                res = count
            }
        })
    })
    return res
};