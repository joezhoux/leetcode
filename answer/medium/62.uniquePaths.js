"use strict";

//递归
var uniquePaths = function(m, n) {
  if (m == 1 || n == 1) return 1;
  return uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
};

//Math way C(n, k) n个选项中取k个元素的组合 n! / k! * (n - k)!
//棋盘 (m + n - 2)个选项中取(m - 1)或(n - 1)的组合
//(m + n - 2)! / (m - 1)! * (m + n - 2 - (m - 1))!
//(m + n - 2)! / (m - 1)! * (n - 1)!
var uniquePaths = function(m, n) {
  let down = m - 1;
  let right = n - 1;
  const numerator = factorial(down + right);
  const denominator = factorial(down) * factorial(right);
  console.log(numerator);
  console.log(denominator);
  return Math.round(numerator / denominator);
};
//求阶乘
function factorial(num) {
  if (num < 2) return 1;
  let result = 2;
  while (num > 2) {
    result *= num;
    num--;
  }
  return result;
};

//数组网格路径累加
var uniquePaths = function(m, n) {
  const grid = Array.from({length: m}, () => new Array(n).fill(1));
  for (let y = 1; y < m; y++) {
    for (let x = 1; x < n; x++) {
      grid[y][x] = grid[y - 1][x] + grid[y][x - 1];
    }
  }
  // console.table(grid);
  return grid[m - 1][n - 1];
};

console.log(uniquePaths(3, 7));
