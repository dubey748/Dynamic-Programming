// using recursion
/*  const ClimbingStairs = (n, i=0, db=[]) => {

if(i==n) return 1;
if(i>n) return 0;
return (ClimbingStairs(n,i+1) + ClimbingStairs(n, i+2))
}  */

// using Top to button
/* var ClimbingStairs = function(n) {

    if(n <= 2) return n;
     else if (dp[n] > 0) {
         return dp[n];
     }


 dp[n]= ClimbingStairs(n-1) + ClimbingStairs(n-2)
   
  
    
     return dp[n];
    
};
var dp=[]
console.log(ClimbingStairs(4))
 */

// button up

var ClimbingStairs = function (n) {
  dp[1] = 1;
    dp[2] = 2;
    for(let i = 3; i<=n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    
    return dp[n];  
};
var dp = [];
console.log(ClimbingStairs(4));
