/*
 * @Date: 2022-05-19 00:40:59
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-19 00:40:59
 * @FilePath: /arithmetic/src/trie-class/index.js
 */
/**
 * @description: 实现前缀树
 * @param {*}
 * @return {*}
 */
 var Trie = function() {
    this.insertList = []
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    if (this.insertList.indexOf(word) === -1)  this.insertList.push(word)
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    return this.insertList.indexOf(word) >= 0 ? true : false
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    for (let i=0; i<this.insertList.length; i++) {
        if (this.insertList[i].indexOf(prefix) === 0) return true
    }
    return false
};