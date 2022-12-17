const ugly = (num) => {
  if (num == 1) {
    return "Yes";
  }

  if (num <= 0) return 0;
  if (num % 2 == 0) {
    return ugly(num / 2);
  }
  if (num % 3 == 0) {
    return ugly(num / 3);
  }
  if (num % 5 == 0) {
    return ugly(num / 5);
  }
  return "No";
};
console.log(ugly(14));
