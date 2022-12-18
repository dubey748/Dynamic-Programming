function ReverseStringWord(str) {
  str = str.replace(/\s+/g, " ").trim();
  str = str.split(" ");
  str.reverse();
  str = str.join(" ");
  return str;
}

console.log(ReverseStringWord("I Love you"));
