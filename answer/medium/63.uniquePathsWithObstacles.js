"use strict";

let obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]];

var uniquePathsWithObstacles = function(obstacleGrid) {
  if (obstacleGrid[0][0]) return 0;
  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;
  let grid = Array.from({length: m}, () => new Uint32Array(n));
  grid[0][0] = 1;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      //当obstacleGrid当前项为0 且 i j都不为0时进行路径累加
      if (!obstacleGrid[i][j] && (i || j)) {
        grid[i][j] = (i ? grid[i - 1][j] : 0) + (j ? grid[i][j - 1] : 0);
      }
    }
  }
  return grid[m - 1][n - 1];
};


//grid第j项总数 总等于前j-1项总和
//grid 1存放第一行第i项总数
//第二行存放第二行第i项总数
var uniquePathsWithObstacles = function(obstacleGrid) {
  if (obstacleGrid[0][0]) return 0;
  let m = obstacleGrid.length + 1;
  let n = obstacleGrid[0].length + 1;
  let grid = new Array(n).fill(0);
  grid[1] = 1;
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i - 1][j - 1] == 0) grid[j] += grid[j - 1];
      else grid[j] = 0;
    }
  }
  return grid[n - 1];
};

console.log(uniquePathsWithObstacles(obstacleGrid));
