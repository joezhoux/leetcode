"use strict";

//两数积的长度总是小于等于 两数长度之和 999 * 999 = 998001 (总小于等于6位数)
//           9 9 9
//    x      9 9 9
//    [0 0 8 9 9 1]
// +  [0 8 9 9 1 0] ==> [0 9 8 9 0 1]
//    [8 9 9 1 0 0]   + [8 9 9 1 0 0] ==> [9 9 8 0 0 1]
var multiply = function(num1, num2) {
  if (!+num1 || !+num2) return "0";
  let len1 = num1.length;
  let len2 = num2.length;
  const arr = Array(len1 + len2).fill(0);
  //记录当前数组下标
  let currIdx = arr.length - 1;
  for (let i = len1 - 1; i >= 0; i--) {
    let idx = currIdx;
    for (let j = len2 -1; j >=0; j--) {
      //存乘积结果
      const result = +num1[i] * +num2[j] + arr[idx];
      arr[idx] = result % 10;
      idx--;
      //利用数组模拟竖式运算
      arr[idx] += (result - result % 10) / 10;
    }
    currIdx--;
  }
  return arr.join("").replace(/^0+/, "");
};

console.log(multiply("123","456"));
