// Using Recursion 
const knapsack=(wt,vl,w,n)=>{
    if(n==0 || w==0) return 0;
    if(wt[n-1]<=w){
        return Math.max(vl[n-1] + knapsack(wt,vl, w-wt[n-1], n-1))
    }
    return knapsack(wt,vl, w, n-1)

}
console.log(knapsack([20, 30, 40, 70], [70, 80, 90, 200], 60, 4))

