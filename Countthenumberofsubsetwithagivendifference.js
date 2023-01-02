const subset = (arr, sum, len) => {
  let t = new Array(len + 1);
  for (let i = 0; i <= len; i++) t[i] = new Array(sum + 1);
  for (let i = 0; i <= len; i++) t[i][0] = true;
  for (let i = 0; i <= sum; i++) t[0][i] = false;
  t[0][0] = 1;
  for (let i = 1; i <= len; i++) {
    for (let j = 0; j <= sum; j++) {
      if ((arr[i - 1]) > j) {
        t[i][j] = t[i - 1][j] ;
      } else {
        t[i][j] = (t[i - 1][j] ) + (t[i - 1][j - arr[i - 1]]);
      }
    }
  }
  return t[len][sum];
};
var findTargetSumWays = function (arr, diff) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  if (sum - diff < 0 || (sum - diff) % 2 == 1 || sum + diff < 0) return 0;

  let s1 = (sum + diff) / 2;
  return subset(arr, Math.abs(s1), arr.length);
};
console.log(findTargetSumWays([100, 100], -400));
