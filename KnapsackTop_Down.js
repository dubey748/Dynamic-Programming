// Using Recursion  + memoized
const knapsack = (wt, val, w, n) => {
  
    let t = new Array(n + 1);
    for (let i = 0; i <= n; i++)
    {
        t[i] = new Array(w + 1);
        for (let j = 0; j <= w; j++)
        {
            if (i == 0 || w == 0)
                t[i][j] = 0;
            else if (wt[i - 1] <= j)
                t[i][j]
                    = Math.max(val[i - 1]
                     + t[i - 1][j - wt[i - 1]],
                     t[i - 1][j]);
            else
                t[i][j] = t[i - 1][j];
        }
    }

    return t[n][w];
};

console.log(knapsack([20, 30, 40, 70], [70, 80, 90, 200], 60, 4));
