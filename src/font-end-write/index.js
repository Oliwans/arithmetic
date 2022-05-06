/*
 * @Date: 2022-05-04 16:19:07
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-05 10:48:55
 * @FilePath: /arithmetic/src/font-end-write/index.js
 */
/**
 * @description: 原生代码实现http请求
 * @param {*}
 * @return {*}
 */
function ajax(url, successCb) {
    const xml = new XMLHttpRequest()
    xml.open('GET',url,false)
    xml.onreadystatechange = () => {
        if (xml.readyState === 4) {
            if (xml.status === 200) {
                successCb()
            }
        }
    }
    xml.send()
}
/**
 * @description: 节流
 * @param {*}
 * @return {*}
 */
function throttle(fn, delay) {
    let timer;
    return () => {
        if (timer) return
        timer = setTimeout(() => {
            fn.apply(this, arguments)
            timer = undefined
        }, delay)
    }
}

/**
 * @description: 防抖
 * @param {*}
 * @return {*}
 */
 function debounce(fn, delay) {
    let timer;
    return () => {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, arguments)
            timer = undefined
        }, delay)
    }
}

/**
 * @description: 实现bind函数
 * @param {*}
 * @return {*}
 */
Function.prototype.bindFn = function (context, ...bindArgs) {
    const self = this
    return function (...args) {
        let newArgs = bindArgs.concat(args || [])
        return self.apply(context, newArgs)
    }
}

/**
 * @description: 实现call函数
 * @param {*}
 * @return {*}
 */
 Function.prototype.callFn = function (context, ...args) {
    if (context === null) context = globalThis
    if (typeof context !== 'object') context = new Object(context)
    let fnKey = Symbol()
    context[fnKey] = this
    const res = context[fnKey](...args)
    delete context[fnKey]
    return res
}

/**
 * @description: 实现apply函数
 * @param {*}
 * @return {*}
 */
 Function.prototype.applyFn = function(context, args) {
    if (context === null) context = globalThis
    if (typeof context !== 'object') context = new Object(context)
    let fnKey = Symbol()
    context[fnKey] = this
    const res = context[fnKey](...args)
    delete context[fnKey]
    return res
}

/**
 * @description: 实现instanceof函数
 * @param {*}
 * @return {*}
 */
function instanceOf(instance, origin) {
    if (instance === null) return false
    let type = typeof instance
    if (type !== 'function' && type !== 'object') return false
    let instancePortype = instance
    while(instancePortype) {
        if (instancePortype.__proto__ === origin.prototype) {
            return true
        } else {
            instancePortype = instancePortype.__proto__
        }
    }
    return false
}
/**
 * @description: lazyman
 * @param {*}
 * @return {*}
 */
class LazyMan {
    #name
    #tasks = []
    constructor(name) {
        this.#name = name
        setTimeout(() => {this.#next()})
    }
    #next() {
        const task = this.#tasks.shift()
        if (task) task()
    }
    eat (food) {
        const task = () => {
            console.log(`${this.#name}吃了${food}`)
            this.#next()
        }
        this.#tasks.push(task)
        return this
    }
    sleep(seconds) {
        const task = () => {
            console.log(`${this.#name}开始睡觉`)
            setTimeout(() => {
                console.log(`${this.#name}睡了${seconds}秒`)
                this.#next()
            }, seconds * 1000)
        }
        this.#tasks.push(task)
        return this
    }
}
/**
 * @description: 数组扁平化
 * @param {*}
 * @return {*}
 */
function arrayFlatten1(arr) {
    let newArr = []
    arr.forEach(element => {
        if (Array.isArray(element)) {
            element.forEach(n => newArr.push(n))
        } else {
            newArr.push(element)
        }
    });
    return newArr
}
function arrayFlatten2(arr) {
    let newArr = []
    arr.forEach(element => {
        newArr = newArr.concat(element)
    });
    return newArr
}

/**
 * @description: 数组彻底扁平化
 * @param {*}
 * @return {*}
 */
 function arrayFlatten3(arr) {
    let newArr = []
    arr.forEach(element => {
        if (Array.isArray(element)) {
            let flatItem = arrayFlatten3(element)
            flatItem.forEach(item => newArr.push(item))
        } else {
            newArr.push(element)
        }
    });
    return newArr
}

function arrayFlatten4(arr) {
    let newArr = []
    arr.forEach(element => {
        if (Array.isArray(element)) {
            let flatItem = arrayFlatten4(element)
            newArr = newArr.concat(flatItem)
        } else {
            newArr = newArr.concat(element)
        }
    });
    return newArr
}

/**
 * @description: 实现getType函数
 * @param {*}
 * @return {*}
 */
function getType(e) {
    let str = Object.prototype.toString.call(e)
    let index = str.indexOf(' ')
    return str.slice(index + 1, -1).toLowerCase()
}

/**
 * @description: 深拷贝
 * @param {*}
 * @return {*}
 */
function cloneDeep(obj,map = new WeakMap()) {
    if (typeof obj !== 'object' || obj === null) return obj
    //避免循环引用
    const objFromMap = map.get(obj)
    if (objFromMap) return objFromMap
    let target = {}
    map.set(obj, target)
    //map
    if (obj instanceof Map) {
        target = new Map()
        obj.forEach((v,k) => {
            const v1 = cloneDeep(v, map)
            const k1 = cloneDeep(k, map)
            target.set(v1,k1)
        })
    }
    //map
    if (obj instanceof Set) {
        target = new Set()
        obj.forEach((v) => {
            const v1 = cloneDeep(v, map)
            target.add(v1)
        })
    }
    // array
    if (obj instanceof Array) {
        target = obj.map(item => cloneDeep(item, map))
    }
    // object
    for (key in obj) {
        const val = obj[key]
        const val1 = cloneDeep(val, map)
        target[key] = val1
    }
    return target
}