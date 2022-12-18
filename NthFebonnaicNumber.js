// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181.
// using recursion
/* function Febbo(n){
    if(n==1 || n==0) return n;
    return Febbo(n-1)+Febbo(n-2)

} */

// using Top down approch
/* function Febbo(n, dp) {
 dp=dp
 

  if (n <= 1) return n;
  if (dp[n]) return dp[n] ;
  
  dp[n]=(Febbo(n - 1, dp) + Febbo(n - 2, dp));
  return dp[n];
} */
// Tabulation
/* function Febbo(n, dp) {
     if (n <= 1) return n;
     dp[0]=0;
     dp[1]=1
     if (dp[n]) return dp[n] ;
     for(let i=2; i<=n;i++){
        dp[i]=dp[i - 1] + dp[i - 2];
     }
     
     return dp[n];
   }
let dp=[] */

// For space optimization in Tabulation
function Febbo(n) {
   
   let  pre1=1;
    let pre2=0
   
    for(let i=2; i<=n;i++){
      let  curr=pre1 + pre2
      pre2=pre1
      pre1=curr
    }
    
    return pre1;
  }

console.log(Febbo(10));
