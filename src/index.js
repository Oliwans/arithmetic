/*
 * @Date: 2022-04-06 17:44:20
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-04-15 13:31:21
 * @FilePath: /arithmetic/src/index.js
 */

//----------------------------- 旋转数组k步 -----------------------------
// const fun = require('./rotate-k/index.js')
// console.log(rotate([1,2,3,4,5,6,7,9], 6))

//----------------------------- 判断字符串括号匹配 -----------------------------
// const fun = require('./brackets-match/index.js')
// console.log(fun('{[3]}'))

// ----------------------------- 二分查找（数组） -----------------------------
// const {binarySearch} = require('./binary-search/index.js')
// console.log(binarySearch([1,2,3,4,5,6,7,8],6))

//----------------------------- 两个栈实现一个队列 -----------------------------
// const myQueue = require('./two-stack-one-queue/index.js')
// let queue = new myQueue()
// queue.add(234)
// queue.add(678)
// queue.add(987)
// console.log(queue.length)
// console.log(queue.delete())
// console.log(queue.length)

//----------------------------- 反转链表 -----------------------------
// const {createLinkList, reverseLinkList} = require('./reverse-link-list/index.js')
// let linkList = createLinkList([1,2,3,4,5])
// console.log(JSON.stringify(linkList))
// let reverseList = reverseLinkList(linkList)
// console.log(JSON.stringify(reverseList))

//----------------------------- 链表实现队列 -----------------------------
// const myQueue = require('./queue-with-link/index.js')
// let queue = new myQueue()
// queue.add(234)
// queue.add(678)
// queue.add(987)
// console.log(queue.length)
// console.log(queue.delete())
// console.log(queue.length)

//----------------------------- 找出一个数组中和为n的两个数 -----------------------------
// const findSumArr = require('./two-number-sum/index.js')
// console.log(findSumArr([9], 9))

//----------------------------- 二叉树相关 -----------------------------
// const {frontTraverseTree, middleTraverseTree, postTraverseTree, findTreeK} = require('./binary-search-tree/index.js')
// const tree = {
//     value: 5,
//     left: {
//         value: 3,
//         left: {
//             value: 2,
//             left: null,
//             right: null
//         },
//         right: {
//             value: 4,
//             left: null,
//             right: null
//         }
//     },
//     right: {
//         value: 7,
//         left: {
//             value: 6,
//             left: null,
//             right: null
//         },
//         right: {
//             value: 8,
//             left: null,
//             right: null
//         }
//     }
// }
// console.log(frontTraverseTree(tree), '前序')
// console.log(middleTraverseTree(tree), '中序')
// console.log(postTraverseTree(tree), '后序')
// console.log(findTreeK(tree, 2))

//----------------------------- 斐波那契数列求第n个数 -----------------------------
// const fun = require('./fibonacci/index.js')
// console.log(fun(9))

//----------------------------- 移动数组中的0到末尾 -----------------------------
// const fun = require('./move-zero/index.js')
// console.log(fun([1,0,3,4,0,0,11,0]))

// ----------------------------- 输出连续字符及次数 -----------------------------
// const fun = require('./continue-number/index.js')
// const result = fun('abcbcacb')
// console.log(result)

//----------------------------- 快排 -----------------------------
// const fun = require('./sort-collection/index.js')
// const result = fun([13,2,1,6,4,7,5])
// console.log(result)

//----------------------------- 查找对称数（回文） -----------------------------
// const fun = require('./find-symmetric-num/index.js')
// const result = fun(99)
// console.log(result)

//----------------------------- 修改字符串中字母大小写 -----------------------------
// const fun = require('./letter-upper-lower/index.js')
// const result = fun('123sdKJdSDFEdsdf')
// console.log(result)

//----------------------------- 数字千分位划分 -----------------------------
// const fun = require('./count-thousands/index.js')
// const result = fun(1123)
// console.log(result)

//----------------------------- 输出出现频率最高的字符 -----------------------------
// const fun = require('./highest-frequency-char/index.js')
// const result = fun('addaad')
// console.log(result)