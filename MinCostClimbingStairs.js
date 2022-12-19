/* // Top to buttom approch  
const minCost=(cost, n, dp)=>{
    if(n==0) return cost[0];
    if(n==1) return cost[1];
    if(dp[n]) return dp[n];
    dp[n]=cost[n] + Math.min(minCost(cost, n-1, dp), minCost(cost, n-2, dp))
    return dp[n];

}

const MinCostClimbingStairs = (cost) => {
    let n=cost.length;
    let dp=[];
    let ans=Math.min(minCost(cost, n-1, dp), minCost(cost, n-2, dp))
    return ans;
  
}

console.log(MinCostClimbingStairs([10,15,20])) */

//  buttom  up approch
/* const minCost=(cost, n)=>{
    let dp=[]
   dp[0]=cost[0];
   dp[1]=cost[1];
   for(let i=2; i<n; i++){
    dp[i]=cost[i] + Math.min(dp[i-1], dp[i-2])

   }
return Math.min(dp[n-1], dp[n-2])

}

const MinCostClimbingStairs = (cost) => {
    let n=cost.length;
  
    let ans=minCost(cost, n)
    return ans;
  
}

console.log(MinCostClimbingStairs([10,15,20])) */

// TO reduce space  complexity
const minCost = (cost, n) => {
  let curr;
  let prev2 = cost[0];
  let prev1 = cost[1];
  for (let i = 2; i < n; i++) {
    curr = cost[i] + Math.min(prev1, prev2);
    prev2 = prev1;
    prev1 = curr;
  }
  return Math.min(prev1, prev2);
};

const MinCostClimbingStairs = (cost) => {
  let n = cost.length;

  let ans = minCost(cost, n);
  return ans;
};

console.log(MinCostClimbingStairs([10, 15, 20]));
