/*
 * @Date: 2022-05-04 16:19:07
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-09-20 15:53:56
 * @FilePath: /arithmetic/src/font-end-write/index.js
 */
/**
 * @description: 1.原生代码实现http请求
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
 * @description: 2.节流
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
 * @description: 3.防抖
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
 * @description: 4.实现bind函数
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
 * @description: 5.实现call函数
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
 * @description: 6.实现apply函数
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
 * @description: 7.实现instanceof函数
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
 * @description: 8.lazyman
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
 * @description: 9.数组扁平化
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
 * @description: 10.数组彻底扁平化
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
 * @description: 11.实现getType函数
 * @param {*}
 * @return {*}
 */
function getType(e) {
    let str = Object.prototype.toString.call(e)
    let index = str.indexOf(' ')
    return str.slice(index + 1, -1).toLowerCase()
}

/**
 * @description: 12.深拷贝
 * @param {*}
 * @return {*}
 */
 const deepClone = function(obj, map = new Map()) {
    if (!obj) return obj
    if (map.has(obj)) { // 判断是否循环引用
      return map.get(obj) 
    }
  
    let newObj
    if (Object.prototype.toString.call(obj) == "[object Object]") {
      newObj = {}
      map.set(obj, newObj);
      for (let key in obj) {
        let val = obj[key]
        newObj[key] = deepClone(val, map)
      }
    } else if (Object.prototype.toString.call(obj) == "[object Array]") {
      newObj = []
      map.set(obj, newObj);
      for (let key in obj) {
        let val = obj[key]
        newObj[key] = deepClone(val, map)
      }
    } else if (Object.prototype.toString.call(obj) == "[object Function]") {
      newObj = obj.clone() 
    } else if (obj.constructor === Object.prototype.toString.call(obj) == "[object Date]") {
      newObj = new Date(obj)
    } else {
      newObj = obj
    }
  
    return newObj
  }

/**
 * @description: 13.new方法实现
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
 * @description: 14.tree遍历，广度优先
 * @param {*}
 * @return {*}
 */
function breadthTree1(node) {
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
function breadthTree2(node) {
    const stack = []
    stack.push(node)
    while (stack.length) {
        const curNode = stack.shift()
        if (!curNode) break;
        console.log(curNode.name)
        // 子节点入队列
        if (curNode.children) {
            Array.from(curNode.children).forEach(e => stack.push(e))
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
 * @description: 15.实现JSON.stringify
 * @param {*}
 * @return {*}
 */

const jsonToString = function(obj) {
  if (!obj) return obj
  let str = ``

  if (Object.prototype.toString.call(obj) === '[object Array]') {
    str = `[`
    let keys = Object.keys(obj)
    for (let j = 0; j < keys.length; j++) {
      let key = keys[j]
      let val = obj[key]
      let res = jsonToString(val)
      str = `${str}${res}`
      if (j !== keys.length - 1) str = `${str},` // remove the last comma
    }
    str = `${str}]`
  } else if (Object.prototype.toString.call(obj) === '[object Object]') {
    str = `{`
    let keys = Object.keys(obj)
    for (let j = 0; j < keys.length; j++) {
      let key = keys[j]
      let val = obj[key]
      let res = jsonToString(val)
      str = `${str}"${key}":${res}`
      if (j !== keys.length - 1) str = `${str},` // remove the last comma
    }
    str = `${str}}`
  } else {
    // other than array or object
    return `${obj}`
  }

  return str
}
/**
 * @description: 16.实现JSON.parse
 * @return {*}
 */
function stringToJson(jsonStr){
    return eval("(" + jsonStr +")")
}
let jsonToStringTest = {
    a: 11,
    b: {
        b: 22,
        c: {
            D: 33,
            e: [44,55,66]
        }
    }
};

/**
 * @description: 17.把数组转化为树
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
 * @description: 18.树转化为数组
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
 * @description: 19.get参数数据结构化
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
 * @description: 20.函数柯里化
 * @param {*} x
 * @return {*}
 */
const myCurry = function(fn) {
    // fn.length gives the length of arguments of fn
    let length = fn.length
    // get arguments from myCurry
    let args = [...arguments].slice(1)
  
    return function(...innerArgs) {
      // concat myCurry and currying arguments
      let moreArgs = [...args, ...innerArgs]
      // if current length === fn.length, we can return the result
      if (length === moreArgs.length) return fn.apply(this, moreArgs)
      // if not yet finished, recursion and call myCurry.apply with the correct arguments
      else return myCurry.apply(this, [fn, ...moreArgs])
    }
}
function sum(a, b, c) {
    return a + b + c;
}
let currying = myCurry(sum)
console.log(currying(1)(2)(3))
console.log(currying(1,2,3))
/**
 * @description: 21.实现promise.all
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
 * @description: 22.实现一个promise.race
 * @return {*}
 */
 const promiseRace = function(promises) {
    return new Promise((resolve, reject) => {
      for (let fn of promises) {
        fn.apply(this)
        .then((res) => {
          resolve(res)
        }).catch((err) => {
          reject(err)
        })
      }
    })
  }
/**
   * @description: 23.实现一个promise
   * @param {*} x
   * @return {*}
   */
 class MyPromise {
    constructor(fn) {
      // Only allow to call resolve or reject once. If resolve or reject is executed, 
      // the promise is done and not allow to call resolve or reject again
      this.state = 'pending'
      // save for later, execute cb in stack when resolving or rejecting
      this.successfullStack = []
      this.failureStack = []
  
      // we should use arrow function here, using normal function will make this undefined
      const resolve = (res) => {
        // if promise is finished (not pending state), not continue and return
        if (this.state === 'pending') this.state = 'success'
        else return
  
        // execute callback one by one
        this.successfullStack.forEach((next) => {
          const nextRes = next[0].apply(this, [res])
          next[1](nextRes)
        })
      }
  
      const reject = (res) => {
        // if promise is finished (not pending state), not continue and return
        if (this.state === 'pending') this.state = 'fail'
        else return
  
        this.failureStack.forEach((cb) => {
          cb.apply(this, [res])
        })
      }
  
      fn(resolve, reject)
    }
  
    then(cb) {
      // chaining promise 链式调用
      // create a new promise and return this promise
      // push callback, resolve and reject to the stack
      return new MyPromise((resolve, reject) => {
        this.successfullStack.push([cb, resolve, reject])
      })
    }
  
    catch(cb) {
      this.failureStack.push(cb)
      return this
    }
  }
/**
 * @description: 24.输入一个多层级对象，找到路径
 * @param {*} x
 * @return {*}
 */

 function findPath(obj, val) {
    for (let item in obj) {
        if (typeof obj[item] === 'object') {
            let temp = findPath(obj[item], val)
            if (temp) return [item].concat(temp).flat()
        } else if (obj[item] === val) {
            return [item]
        }
    }
}

function getPath(obj, val) {
    let arr = []
    for (let key in obj) {
        if (typeof obj[key]  === 'object'){
            let res = getPath(obj[key], val)
            if (res.length) arr = arr.concat(key).concat(res)
        } else if (obj[key] === val){
            arr = arr.concat(key)
        }
    }
    return arr
}
let obj = {
    k: {
        j: {
            d: 1
        }
    },
    p: 2
}

/**
   * @description: 25.路径还原成对象
   * @return {*}
   */
  // const obj = { 
  //   'a.b.c': 5,
  //   'a.e.x': 'xxx',
  //   'a.d': 'yyy'
  // };
  
  function setObj(obj) {
    let res = {}
    Object.keys(obj).forEach(item => {
        help(item, obj[item], res);
    })
    return res
};

let help = (path, value, obj) => {
    path.split('.').reduce((r, e, i,arr) => {
        return r[e] || (r[e] = i === arr.length -1 ? value : {})
    }, obj)
}
/**
 * @description: 25.实现reduce
 * @return {*}
 */
 Array.prototype.myReduce = function(fn, initialValue) {
    let nums = this
    let res = 0
    if (initialValue) res = initialValue
  
    for (let i = 0; i < nums.length; i++) {
      res = fn(res, nums[i])
    }
  
    return res
}
/**
 * @description: 26.手动实现tirm
 * @return {*}
 */
 String.prototype.myTrim = function() {
    let str = this
    const trimLeft = function(string) {
      for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) !== ' ') {
          return string.substring(i, string.length)
        }
      }
  
      return string
    }
  
    const trimRight = function(string) {
      for (let i = string.length - 1; i >= 0; i--) {
        if (string.charAt(i) !== ' ') {
          return string.substring(0, i + 1)
        }
      }
  
      return string
    }
  
    return trimRight(trimLeft(str))
}
/**
 * @description: 27.实现dom to json
 * @return {*}
 */
 const dom2json = function(domTree) {
    // create an obj
    let obj = {}
    // get the tag name
    obj.tag = domTree.tagName
    // setup array for children
    obj.children = []
    // iterate each child node
    domTree.childNodes.forEach((child) => {
      // dfs, it will return json of this child
      obj.children.push(dom2json(child))
    })
    return obj
}
/**
 * @description: 28.实现json to dom
 * @return {*}
 */
 const vdomToRdom = function(vdom) {
    let tag = vdom.tag.toLowerCase()
    let dom = document.createElement(tag)
  
    if (vdom.attrs) {
      for (let key in vdom.attrs) {
        let val = vdom.attrs[key]
        dom.setAttribute(key, val)
      }
    }
  
    for (let child of vdom.children) {
      let childNode = vdomToRdom(child)
      dom.appendChild(childNode)
    }
  
    return dom
  }
  /**
   * @description: 29.版本号排序
   * @return {*}
   */
   const sortByVersion = function(versions) {
    versions.sort((a, b) => {
      let alist = a.split('.')
      let blist = b.split('.')
      let index = 0
  
      while (alist[index] && blist[index] && alist[index] === blist[index]) {
        index++
      }
  
      if (alist[index] && !blist[index]) return -1 // if a is longer, a should be larger
      else if (!alist[index] && blist[index]) return 1 // if b is longer, b should be larger
      else if (alist[index] !== blist[index]) return blist[index] - alist[index] // if a != b, return b - a 
  
      return 0 // a = b
    })
  
    return versions
  }
  /**
   * @description: 30.寄生组合继承
   * @return {*}
   */
// 寄生组合继承
function Parent(name) {
    this.name = name
    this.say = () => {
       console.log("111")
    }
  }
  function Child(name) {
    Parent.call(this, name) // step 1
    this.name = name
  }
  Child.prototype = Object.create(Parent.prototype) // step 2
  Child.prototype.constructor = Child // step 3
  Parent.prototype.play = () => {
    console.log("222")
  }
  
  let child = new Child("儿子");
  console.log(child.name);
  child.say();
  /**
   * @description: 单例模式
   * @return {*}
   */
   class SingleClass {
    constructor() {
      this.instance = null
    }
  
    static getInstance(name) {
      if (this.instance) return this.instance
  
      this.instance = new SingleClass(name)
      return this.instance
    }
  }
  let Jack = SingleClass.getInstance('Jack');
  let Tom = SingleClass.getInstance('Tom');
  console.log( Jack === Tom ); // true
