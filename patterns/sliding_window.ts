//Find the maximum sum of k consecutive elements.
function  maxSum(arr:number[], k: number) {
    if(arr.length<k){
        return -1
    }
    let max_sum, sum = 0;
    for(let i=0;i<k;i++){
        sum+=arr[i];
    }
    max_sum = sum;
    for(let i=k;i<arr.length;i++){
        sum+=arr[i];
        sum-=arr[i-k];
        max_sum = Math.max(max_sum, sum);
    }
    return max_sum;
}
console.log(maxSum([2, 1, 5, 1, 3, 2], 3));