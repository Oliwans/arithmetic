/*
 * @Date: 2022-04-10 19:06:29
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-04-10 19:10:01
 * @FilePath: /arithmetic/src/binary-search-tree/index.test.js
 */
const {findTreeK} = require('./index.js')
const tree = {
    value: 5,
    left: {
        value: 3,
        left: {
            value: 2,
            left: null,
            right: null
        },
        right: {
            value: 4,
            left: null,
            right: null
        }
    },
    right: {
        value: 7,
        left: {
            value: 6,
            left: null,
            right: null
        },
        right: {
            value: 8,
            left: null,
            right: null
        }
    }
}
describe('测试查找二叉树第K小值', () => {
    it('测试一般情况', () => {
        expect(findTreeK(tree, 3)).toBe(4)
    })
})