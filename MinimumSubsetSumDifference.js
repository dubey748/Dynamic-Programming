const subset = (arr, sum, len) => {
  let t = new Array(len + 1);
  for (let i = 0; i <= len; i++) t[i] = new Array(sum + 1);
  for (let i = 0; i <= len; i++) t[i][0] = true;
  for (let i = 0; i <= sum; i++) t[0][i] = false;
  t[0][0] = true;

  for (let i = 1; i <= len; i++) {
    for (let j = 1; j <= sum; j++) {
      if (arr[i - 1] <= j) {
        t[i][j] = t[i - 1][j - arr[i - 1]] || t[i - 1][j];
      } else {
        t[i][j] = t[i - 1][j];
      }
    }
  }
  let vector = [];
  
  let range = Math.abs(sum / 2);
  console.log("range " + range)
  if(range%2==0){
    for (let i = len; i <= len; i++) {
        for (let j = 0; j < range+1 ; j++) {
          if (t[i][j] == true) {
            vector.push(j);
          }
        }
      }
  }
  else{
    for (let i = len; i <= len; i++) {
        for (let j = 0; j < range ; j++) {
          if (t[i][j] == true) {
            vector.push(j);
          }
        }
      }
  }
 
  console.log(vector);
  return vector;
};
const MinimumSubsetSumDifference = (arr) => {
  let min = Number.MAX_SAFE_INTEGER;
  let sum = 0;
  let add = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  console.log(sum);

  if (sum <= 0) {
    for (let i = 0; i < arr.length; i++) {
      min = Math.min(min, arr[i]);
    }
    console.log(min)

    for (let i = 0; i < arr.length; i++) {
      arr[i] += Math.abs(min);
    }
    console.log(arr)
  }
  for (let i = 0; i < arr.length; i++) {
    add = add + arr[i];
  }
  console.log(add);

  let mini = Number.MAX_SAFE_INTEGER;

  let vector = subset(arr, add, arr.length);

  for (let i = 0; i < vector.length; i++) {
    mini = Math.min(mini, Math.abs(add - 2 * vector[i]));
    console.log(mini);
  }
  return mini;
};
console.log(MinimumSubsetSumDifference([76,8,45,20,74,84,28,1]));
