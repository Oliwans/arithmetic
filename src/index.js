/*
 * @Date: 2022-04-06 17:44:20
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-04-07 20:44:55
 * @FilePath: /arithmetic/src/index.js
 */

// const fun = require('./rotate-k/index.js')
// console.log(rotate([1,2,3,4,5,6,7,9], 6))

// const fun = require('./brackets-match/index.js')
// console.log(fun('{[3]}'))

// const myQueue = require('./two-stack-one-queue/index.js')
// let queue = new myQueue()
// queue.add(234)
// queue.add(678)
// queue.add(987)
// console.log(queue.length)
// console.log(queue.delete())
// console.log(queue.length)

// const {createLinkList, reverseLinkList} = require('./reverse-link-list/index.js')
// let linkList = createLinkList([1,2,3,4,5])
// console.log(JSON.stringify(linkList))
// let reverseList = reverseLinkList(linkList)
// console.log(JSON.stringify(reverseList))

const myQueue = require('./queue-with-link/index.js')
let queue = new myQueue()
queue.add(234)
queue.add(678)
queue.add(987)
console.log(queue.length)
console.log(queue.delete())
console.log(queue.length)


