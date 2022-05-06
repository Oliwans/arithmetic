/*
 * @Date: 2022-05-06 15:03:06
 * @LastEditors: wangpeng
 * @LastEditTime: 2022-05-06 15:03:07
 * @FilePath: /arithmetic/src/longest-palindrome/index.js
 */
/**
 * @description: 最长回文子串，以每个元素为中心，向两边扩散
 * @param {*}
 * @return {*}
 */
 var longestPalindrome = function(s) {
    var res = "";
    for (var i=0; i<s.length;i++) {
        // 奇数情况
        var left = i;
        var right = i;
        while(left >=0 && right < s.length && s[left]===s[right]) {
            left--;
            right++;
        }
        if (res.length < right-left-1) {
            res = s.substr(left+1, right-left-1);
        }
        // 偶数情况
        left = i;
        right = i+1;
        while(left >=0 && right < s.length && s[left]===s[right]) {
            left--;
            right++;
        }
        if (res.length < right-left-1) {
            res = s.substr(left+1, right-left-1);
        }
    }
    return res;
};