const isPalindrome = (arr, i, j) => {
  while (i < j) {
    if (arr[i] != arr[j]) return false;

    i++;
    j--;
  }
  return true;
};
const PPR = (arr, i, j) => {
  let temp = 0;
  let min = Number.MAX_VALUE;
  if (i >= j || isPalindrome(arr, i, j)) return 0;
  for (let k = i; k <= j - 1; k++) {
    temp = PPR(arr, i, k) + PPR(arr, k + 1, j) + 1;
    min = Math.min(min, temp);
  }
  return min;
};
let s = "aab";
let i = 0;
let j = s.length - 1;
console.log(PPR(s, i, j));
