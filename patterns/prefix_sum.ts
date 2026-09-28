//Range Sum Using Prefix Sum
function prefixSum(arr: number[]){
    const preFixArray = new Array(arr.length);
    preFixArray[0]=arr[0];
    for(let i =1; i<arr.length;i++){
        preFixArray[i] = preFixArray[i-1]+ arr[i];
    }
    return preFixArray;
}
function findPrefixSumInRange(preFixArray:number[],
     left: number,
    right: number){
        if(left === 0){
            return preFixArray[right];
        }
        return preFixArray[right] - preFixArray[left-1];
    }
const preFixArray1 = prefixSum([1,2,3,4,6]);
console.log(preFixArray1);
console.log(findPrefixSumInRange(preFixArray1, 1,3));