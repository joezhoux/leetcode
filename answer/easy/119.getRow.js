"use strict";

var getRow = function(rowIndex) {
  let arr = new Array(rowIndex + 1);
  for (let i = 0; i < rowIndex + 1; i++) {
    let item = new Array(i + 1).fill(1);
    let mid = i >> 1;
    for (let j = 1; j <= mid; j++) {
      let val = arr[i - 1][j - 1] + arr[i - 1][j];
      item[j] = val;
      item[item.length - 1 - j] = val;
    }
    arr[i] = item; 
  }
  return arr[rowIndex];    
};
