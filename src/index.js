/*
 * @Date: 2022-04-06 17:44:20
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-04-09 23:43:44
 * @FilePath: /arithmetic/src/index.js
 */

//----------------------------- 旋转数组k步 -----------------------------
// const fun = require('./rotate-k/index.js')
// console.log(rotate([1,2,3,4,5,6,7,9], 6))

//----------------------------- 判断字符串括号匹配 -----------------------------
// const fun = require('./brackets-match/index.js')
// console.log(fun('{[3]}'))

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
const findSumArr = require('./two-number-sum/index.js')
console.log(findSumArr([1,2,3,4,5,6,7,9], 6))
