
const LCS=function(text1,text2,len1,len2){
   if(len1==0||len2==0) return 0
   if(text1[len1-1]==text2[len2-1]){
      return 1+LCS(text1,text2, len1-1,len2-1)
  }
  else{
      let ans=Math.max(LCS(text1,text2, len1,len2-1),
      LCS(text1,text2, len1-1,len2))
      return ans
  }


} 
var longestCommonSubsequence = function(text1, text2) {
 
  let len1=text1.length;
  let len2=text2.length;
 return LCS(text1,text2,len1,len2)
};

console.log(longestCommonSubsequence("abcde","ace"))