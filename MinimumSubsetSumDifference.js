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
  
 
  
    for (let i = len; i <=len; i++) {
        for (let j = 0; j < sum ; j++) {
          if (t[i][j] == true) {
            vector.push(j);
          }
        }
      }
  
 
  
  return vector;
};
const MinimumSubsetSumDifference = (arr) => {
  let min = Number.MAX_SAFE_INTEGER;
  let sum = 0;
  let add = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  

  if (sum <= 0) {
    for (let i = 0; i < arr.length; i++) {
      min = Math.min(min, arr[i]);
    }
    

    for (let i = 0; i < arr.length; i++) {
      arr[i] += Math.abs(min);
    }
    
  }
  for (let i = 0; i < arr.length; i++) {
    add = add + arr[i];
  }
  

  let mini = Number.MAX_SAFE_INTEGER;

  let vector = subset(arr, add, arr.length);
let len=Math.round((vector.length)/2)


  for (let i = 0; i < len; i++) {
    mini = Math.min(mini, Math.abs(add - 2 * vector[i]));
    
  }
  return mini;
};
console.log(MinimumSubsetSumDifference([3,9,7,3]));
