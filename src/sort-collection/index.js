/*
 * @Date: 2022-04-11 18:37:19
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-18 15:35:46
 * @FilePath: /arithmetic/src/sort-collection/index.js
 */
/**
 * @description: 快速排序 时间复杂度 O(nlogn)
 * @param {arr}
 * @return {arr}
 */
function quickSort(arr) {
    if (!arr || !arr.length) return []
    if (arr.length === 1) return arr
    let arrNew = arr.slice(1)
    let flag = arr[0]
    let left = []
    let right = []
    arrNew.forEach(e => {
        e >= flag ? right.push(e) : left.push(e)
    });
    return quickSort(left).concat([flag],quickSort(right))
}
/**
 * @description: 冒泡排序
 * @param {*} arr
 * @return {*}
 */
function bubbleSort(arr) {
    //console.time('BubbleSort');
    // 获取数组长度，以确定循环次数。
    let len = arr.length;
    // 遍历数组len次，以确保数组被完全排序。
    for(let i=0; i<len; i++) {
        // 遍历数组的前len-i项，忽略后面的i项（已排序部分）。
        for(let j=0; j<len - 1 - i; j++) {
            // 将每一项与后一项进行对比，不符合要求的就换位。
            if(arr[j] > arr[j+1]) {
                [arr[j+1], arr[j]] = [arr[j], arr[j+1]];
            }
        }
    }
    //console.timeEnd('BubbleSort');
    return arr;
}
/**
 * @description: 选择排序
 * @param {*} arr
 * @return {*}
 */
function selectionSort(arr) {
    //console.time('SelectionSort');
    // 获取数组长度，确保每一项都被排序。
    let len = arr.length;
    // 遍历数组的每一项。
    for(let i=0; i<len; i++) {
        // 从数组的当前项开始，因为左边部分的数组项已经被排序。
        let min = i;
        for(let j=i; j<len; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        if(min !== i) {
            [arr[min], arr[i]] = [arr[i], arr[min]];
        }
    }
    //console.timeEnd('SelectionSort');
    return arr;
}
/**
 * @description: 插入排序
 * @param {*} arr
 * @return {*}
 */
function insertionSort(arr) {
    //console.time('InsertionSort');
    let len = arr.length;
    for(let i=1; i<len; i++) {
        let j = i;
        let tmp = arr[i];
        while(j > 0 && arr[j-1] > tmp) {
            arr[j] = arr[j-1];
            j--;
        }
        arr[j] = tmp;
    }
    //console.timeEnd('InsertionSort');
    return arr;
}

module.exports = quickSort
