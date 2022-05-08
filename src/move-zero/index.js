/*
 * @Date: 2022-04-10 19:14:16
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-09 00:28:25
 * @FilePath: /arithmetic/src/move-zero/index.js
 */
/**
 * @description: 移动数组中的0到末尾，双指针解法 时间复杂度O(n) 空间复杂度O(1)
 * @param {[1,0,2,0,3]}
 * @return {[1,2,3,0,0]}
 */

function moveZero(arr) {
  if (!arr || !arr.length) return []
	let i;
	let j;
	for (i = 0; i < arr.length; i++) {
		if (arr[i] === 0) {
			j = !j ? i : j // 只在第一次碰到0的时候给j赋值索引
		}
		if (arr[i] !== 0 && arr[j] === 0) {
			const n = arr[i]
			arr[i] = arr[j]
			arr[j] = n
			j++
		}
	}
	return arr
}

module.exports = moveZero