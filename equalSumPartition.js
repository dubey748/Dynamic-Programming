
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
  
    return t[len][sum];
  };
  
const equalSumPartition = (nums) => {
    let sum=0
    for(let i=0; i<nums.length;i++){
 sum=nums[i]+sum
    }
    if(sum%2!=0){
        return false
    }
    else {
return subset(nums, sum/2, nums.length)
    }
  
}

 console.log(equalSumPartition([1,2,5]))