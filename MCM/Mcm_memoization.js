const mcm = (arr, i, j) => {
  var t = new Array(i + 1).fill(-1).map(() => new Array(j + 1).fill(-1));

  let temp = 0;
  let min = Number.MAX_SAFE_INTEGER;
  if (t[i][j] != -1) return t[i][j];
  if (i >= j) {
    return 0;
  }
  for (let k = i; k <= j - 1; k++) {
    //[10,20,30]
    temp = mcm(arr, i, k) + mcm(arr, k + 1, j) + arr[i - 1] * arr[k] * arr[j];
    if (temp < min) {
      min = temp;
    }
  }

  return (t[i][j] = min);
};

console.log(mcm([10, 20, 30], 1, 2));
