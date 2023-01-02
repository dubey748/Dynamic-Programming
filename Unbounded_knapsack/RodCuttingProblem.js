

const rodutting = (wt,val,w,n) => {
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
let length=[1, 2,3,4,5,6,7,8]
let price=[1,5,8,9,10,17,17,20]
let w=8
let size=8

console.log(rodutting(length, price,w,size))