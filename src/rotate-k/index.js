/*
 * @Date: 2022-04-06 17:25:49
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-09 00:40:17
 * @FilePath: /arithmetic/src/rotate-k/index.js
 */

/**
 * @description: 旋转数组k步 时间复杂度O(1) 空间复杂度O(n)
 * @param {[1,2,3,4,5,6,7]}
 * @param {3}
 * @return {[5,6,7,1,2,3,4]}
 */
function rotate(arr, k) {
	if (!arr.length || !k) return arr
	let count = Math.abs(k%arr.length)
	let part1 = arr.slice(-count);
	let part2 = arr.slice(0, arr.length - k);
	return part1.concat(part2)
}
module.exports = rotate