const subset = (arr, sum, len) => {
    let t = new Array(len + 1);
    for (let i = 0; i <= len; i++) t[i] = new Array(sum + 1);
    t[0][0] = 0;
    for(let i=0;i<=len;i++) t[i][0]=0;
    for(let i=0;i<=sum;i++) t[0][i] = Number.MAX_VALUE -1;
    
    for(let i=1;i<=len;i++){  
      for(let j=1; j<=sum;j++){
          if(arr[i-1]<=j){ 
              t[i][j]=Math.min(1+t[i][j-arr[i-1]], t[i-1][j] ) 
                         
          }
          else{
              t[i][j]=t[i-1][j]  
              
          }
         
      }
    }
    let ans;
    t[len][sum] == Number.MAX_VALUE-1 ? ans = -1 : ans = t[len][sum];
    return ans;
    
  };
  const coinChange = (arr, sum) => {
    len = arr.length;
    let ans=subset(arr, sum, len);
    return ans
  };
  
  console.log(coinChange([1], 0));