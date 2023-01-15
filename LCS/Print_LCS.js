const LCS = function (m, n, l1, l2) {
  let t = new Array(l1 + 1);
  for (let i = 0; i <= l1; i++) {
    t[i] = new Array(l2 + 1);
    for (let j = 0; j <= l2; j++) {
      if (i == 0 || j == 0) t[i][j] = 0;
    }
  }
  for (let i = 1; i <= l1; i++) {
    for (let j = 1; j <= l2; j++) {
      if (m[i - 1] == n[j - 1]) {
        t[i][j] = 1 + t[i - 1][j - 1];
      } else {
        t[i][j] = Math.max(t[i - 1][j], t[i][j - 1]);
      }
    }
  }
  let s = "";
  while (l1 > 0 && l2 > 0) {
    if (m[l1 - 1] == n[l2 - 1]) {
      s += m[l1 - 1];
      l1--;
      l2--;
    } else {
      if (t[l1][l2 - 1] > t[l1 - 1][l2]) {
        l2--;
      } else {
        l1--;
      }
    }
  }
  return s.split('').reverse().join('');
};
var PrintLCS = function (text1, text2) {
  let len1 = text1.length;
  let len2 = text2.length;
  return LCS(text1, text2, len1, len2);
};

console.log(PrintLCS("acbcf", "abcdaf"));
