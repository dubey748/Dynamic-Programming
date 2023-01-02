

const UB_knapsack = (wt,val,w,n) => {
    let t = new Array(n + 1);
    for(let i = 0; i <= n; i++){
        t[i]=new Array(w+1)
        for (let j = 0; j <= w; j++){
            if (i == 0 || j == 0) t[i][j] = 0;
            else if(wt[i-1]<=j){
                t[i][j] = Math.max(val[i-1] + t[i][j - wt[i - 1]], t[i - 1][j]);
               
            } 
            else t[i][j] = t[i - 1][j];
        }
    }
   return  t[n][w]
}

console.log(UB_knapsack([1, 50], [1, 30],100,2))