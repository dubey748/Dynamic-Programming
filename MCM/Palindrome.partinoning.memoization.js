const isPalindrome = (i,j,str) => {
  while(i<j){
    if(str[i] !== str[j]){
        return false;
    }
    j--;
    i++
}
return true
};
const PPR = ( i, len, str, t) => {
  if(i===len)return 0;
  if(t[i] !== -1)return t[i]
  let min = Number.MAX_VALUE;
  for(let j=i;j<len;j++){
      if(isPalindrome(i,j,str)){
         let cuts =  1+ PPR(j+1,len,str,t)
            min = Math.min(cuts,min)
    }
      
  }
  return t[i] = min
};
let s="aab"
    let n = s.length;
    let t = Array(n).fill(-1);
    console.log(PPR(0,n,s,t) -1)
