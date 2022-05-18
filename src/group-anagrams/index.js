/*
 * @Date: 2022-05-18 23:58:01
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-18 23:58:01
 * @FilePath: /arithmetic/src/group-anagrams/index.js
 */
/**
 * @description: 字母异位词分组
 * @param {*}
 * @return {*}
 */
 var groupAnagrams = function(strs) {
    const map = new Map();
    for (let str of strs) {
        let key = str.split('').sort().toString();
        let list = map.get(key) ? map.get(key) : [];
        list.push(str);
        map.set(key, list);
    }
    return Array.from(map.values());
};