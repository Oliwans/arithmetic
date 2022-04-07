/*
 * @Date: 2022-04-07 10:34:56
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-04-07 11:45:19
 * @FilePath: /arithmetic/src/brackets-match/index.js
 */
/**
 * @description: 判断字符串括号匹配 时间复杂度O(logn) 空间复杂度O(1)
 * @param {str} 
 * @return {flag}
 */
function brackets(str) {
  let length = str.length
	let flag = true;
	if (!str) return true
	for (let i = 0; i < Math.floor(length/2); i++) {
		if (str[i] === '(' && str[length - 1 - i] !== ')') flag = false
		if (str[i] === '{' && str[length - 1 - i] !== '}') flag = false
		if (str[i] === '[' && str[length - 1 - i] !== ']') flag = false
	}
	return flag
}

/**
 * @description: 用栈去实现  时间复杂度O(n) 空间复杂度O(1)
 * @param {str} 
 * @return {boolean}
 */
 function bracketsStuck(str) {
	if (!str) return true
	let left = '{(['
	let right = '})]'
	let arr = []
	for (let i = 0; i<=str.length; i++) {
		if (left.indexOf(str[i]) >= 0) {
			arr.push(str[i])
		} else if (right.indexOf(str[i]) >= 0) {
			if ((str[i] === ')' && arr[arr.length - 1] === '(') || (str[i] === ']' && arr[arr.length - 1] === '[') || (str[i] === '}' && arr[arr.length - 1] === '{')) {
				arr.pop()
			} else {
				return false
			}
		}
	}
	return !arr.length
}
module.exports = brackets