/*
 * @Date: 2022-04-07 14:50:35
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-04-07 15:26:44
 * @FilePath: /arithmetic/src/two-stack-one-queue/index.js
 */

/**
 * @description: 两个栈实现一个队列 add时间复杂度O(1)空间复杂度O(1) delete时间复杂度O(n) 空间复杂度O(n)
 */
module.exports = class myQueue {
    #stack1 = []
    #stack2 = []
    add(e) {
        this.#stack1.push(e)
    }
    delete() {
        while(this.#stack1.length) {
            let n = this.#stack1.pop()
            this.#stack2.push(n)
        }
        let les = this.#stack2.pop()
        while(this.#stack2.length) {
            let n = this.#stack2.pop()
            this.#stack1.push(n)
        }
        return les || null
    }
    get length() {
        return this.#stack1.length
    }
}
