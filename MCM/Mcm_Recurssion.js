const mcm=(arr, i, j)=>{
    let temp=0;
    let min=Number.MAX_SAFE_INTEGER;
if(i>=j){
    return 0;
}
for(let k =i;k<=j-1;k++){ //[10,20,30]
    temp=mcm(arr,i,k)+mcm(arr,k+1,j) + arr[i-1] * arr[k] *  arr[j] 
    if(temp<min){
min=temp
    }

}
return min;
}

console.log(mcm([10,20,30], 1, 2)) 