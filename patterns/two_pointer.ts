//Two Sum — Sorted Array
function twoSum(arr: number[], target: number): number[]{
    let left = 0;
    let right = arr.length-1;
    while(left<right){
        let sum = arr[left]+ arr[right];
        if(sum === target){
            return [arr[left], arr[right]];
        }
        if(sum<target){
            left++;
        }else {
            right--;
        }
    }
    return [];
}
console.log(twoSum([1, 2, 7], 9));

