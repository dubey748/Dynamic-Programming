// Using Recursion  + memoized 
const knapsack = (wt, vl, w, n) => {
    var t = new Array(n+1).fill(-1).map(() => new Array(w+1).fill(-1));

  if (n == 0 || w == 0) return 0;

  if (t[n][w]!=-1) return t[n][w];
  if (wt[n - 1] <= w) {
    t[n][w] = Math.max(vl[n - 1] + knapsack(wt, vl, w - wt[n - 1], n - 1));
    return t[n][w];
  }

  t[n][w] = knapsack(wt, vl, w, n - 1);
 
  return t[n][w];
};

console.log(knapsack([20, 30, 40, 70], [70, 80, 90, 200], 60, 4));
