/*
 * @Date: 2022-05-19 00:42:11
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-19 00:42:11
 * @FilePath: /arithmetic/src/can-finish-class/index.js
 */
/**
 * @description: 课程表
 * @param {*}
 * @return {*}
 */

 var canFinish = function(numCourses, prerequisites) {
    let inDegree = new Array(numCourses).fill(0)
    let map = {}
    for (let i = 0; i<prerequisites.length; i++) {
        inDegree[prerequisites[i][0]]++
        if (map[prerequisites[i][1]]) {
            map[prerequisites[i][1]].push(prerequisites[i][0])
        } else {
            map[prerequisites[i][1]] = [prerequisites[i][0]]
        }
    }
    let queue = []
    inDegree.forEach((item,i) => {
        item === 0 && queue.push(i)
    })
    let count = 0
    while (queue.length) {
        let selected = queue.shift()
        count++
        const toEnQueue = map[selected]
        if (toEnQueue && toEnQueue.length) {
            for (let i=0; i< toEnQueue.length; i++) {
                inDegree[toEnQueue[i]]--
                if (!inDegree[toEnQueue[i]]) {
                    queue.push(toEnQueue[i])
                }
            }
        }
    }
    return count === numCourses
};