/*
 * @Date: 2022-04-07 20:32:43
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-04-07 20:48:25
 * @FilePath: /arithmetic/src/queue-with-link/index.js
 */
/**
 * @description: 链表实现队列 add时间复杂度O(1)空间复杂度O(1) delete时间复杂度O(1) 空间复杂度O(n)
 */
module.exports = class myQueue {
    #head = null
    #tail = null
    #len = 0
    add(n) {
        let newNode = {
            value: n
        }
        if (!this.#head) this.#head = newNode
        let tailNode = this.#tail
        if (tailNode) {
            tailNode.next = newNode
        }
        this.#tail = newNode
        this.#len++
    }
    delete() {
        if (!this.#head) return null
        let value = this.#head.value
        this.#head = this.#head.next
        this.#len--
        return value
    }
    get length() {
        return this.#len
    }
}