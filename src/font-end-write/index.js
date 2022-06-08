/*
 * @Date: 2022-05-04 16:19:07
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-06-08 21:38:27
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

/**
 * @description: new方法实现
 * @param {*}
 * @return {*}
 */

function newFun(constructor, ...args) {
    // 创建一个空对象，继承自constructor的原型
    const obj = Object.create(constructor.prototype)
    // 执行这个函数，传入参数
    constructor.apply(obj, args)
    // 返回obj
    return obj
}

/**
 * @description: 广度优先
 * @param {*}
 * @return {*}
 */
function breadthTree(node) {
    const queue = []
    queue.unshift(node)
    while (queue.length) {
        const curNode = queue.pop()
        if (!curNode) break;
        console.log(curNode.name)
        // 子节点入队列
        if (curNode.children) {
            curNode.children.forEach(item => {
                queue.unshift(item)
            })
        }
    }
}
/**
 * @description: 深度优先
 * @param {*}
 * @return {*}
 */
function depthTree1(node) {
    console.log(node.name)
    if (node.children) {
        node.children.forEach(item => {
            depthTree(item)
        })
    }
}
function depthTree2(node) {
    const stack = []
    stack.push(node)
    while (stack.length) {
        const curNode = stack.pop()
        if (!curNode) break;
        console.log(curNode.name)
        // 子节点入队列
        if (curNode.children) {
            Array.from(curNode.children).reverse().forEach(e => stack.push(e))
        }
    }
}
let a = {
    name: 1,
    children: [{
        name: 2,
        children: [{
            name:3
        },{
            name: 4
        }]
    },{
        name: 5,
        children: [{
            name:6
        },{
            name: 7
        }]
    }]
}

/**
 * @description: 实现JSON.stringify
 * @param {*}
 * @return {*}
 */

function stringify(data) {
    if (typeof data === 'string') {
        return `"${data}"`
    } else {
        let result = []
        Object.keys(data).forEach(item => {
            result.push(`"${item}":${stringify(data[item])}`)
        })
        return `{${result}}`
    }
}

/**
 * @description: 把数组转化为树
 * @param {*}
 * @return {*}
 */
function convert(arr) {
    const map = new Map()
    let root = null
    arr.forEach(item => {
        const {id, name, parentId} = item
        let node = {id, name, parentId}
        map.set(id, node)
        const parentNode = map.get(parentId)
        if (parentNode) {
            parentNode.children = parentNode.children || []
            parentNode.children.push(node)
        }
        if (parentId === 0) root = node
    })
    return [root]
}
/**
 * @description: 树转化为数组
 * @param {*} node
 * @return {*}
 */
function wideTraversal(node){
    let stack = node,
        data = [];
    while(stack.length != 0){
        let shift = stack.shift();
        data.push({
            id: shift.id,
            name: shift.name,
            parentId: shift.parentId
        })
        let children = shift.children
        if(children){
            for(let i = 0; i < children.length; i++){
                stack.push(children[i])
            }
        }
    }
    return data
}

[
    {id: 1, name: 'a', parentId: 0},
    {id: 2, name: 'a', parentId: 1},
    {id: 3, name: 'a', parentId: 1},
    {id: 4, name: 'a', parentId: 2},
    {id: 5, name: 'a', parentId: 2},
    {id: 6, name: 'a', parentId: 3},
    {id: 7, name: 'a', parentId: 3},
    {id: 8, name: 'a', parentId: 4},
    {id: 9, name: 'a', parentId: 4},
]

/**
 * @description: 实现promise.all
 * @param {*}
 * @return {*}
 */
 Promise.MyAll = function (promises) {
    let arr = [],
      count = 0
    return new Promise((resolve, reject) => {
      promises.forEach((item, i) => {
        Promise.resolve(item).then(res => {
          arr[i] = res
          count += 1
          if (count === promises.length) resolve(arr)
        }, reject)
      })
    })
  }
  /**
   * @description: get参数数据结构化
   * @return {*}
   */
   function getUrlJson(str) {
    let obj = {}
    let index = str.indexOf('?') // 得到 ? 号的索引位置
    if (index !== -1) {
      let optionStr = str.slice(index + 1)  // 得到 ? 号后边的字符串
      let arr = optionStr.split('&')  // 得到每一项的 a=1 组成的数组
      for (let i = 0; i < arr.length; i++) {
        let j = arr[i].indexOf('=') // 得到 '=' 号的索引位置
        if (j === -1) {
          obj[arr[i]] = undefined
        } else {
          obj[arr[i].slice(0, j)] = arr[i].slice(j + 1)
        }
      }
    }
    return obj
  }
  /**
   * @description: 函数柯里化
   * @param {*} x
   * @return {*}
   */
  function add(x) {
    // 存储和
    let sum = x;
     
    // 函数调用会相加，然后每次都会返回这个函数本身
    let tmp = function (y) {
      sum = sum + y;
      return tmp;
    };
    
    // 对象的toString必须是一个方法 在方法中返回了这个和
    tmp.toString = () => sum
    return tmp;
 }
