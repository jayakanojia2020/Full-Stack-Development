function mergeSort(arr: number[]): number[]{
    if(arr.length<=1){
        return arr;
    }
let mid = Math.floor(arr.length/2);
let left = mergeSort(arr.slice(0,mid));
let right = mergeSort(arr.slice(mid));
return merge(left, right);
}
function merge(left:number[], right: number[]): number[]{
    let res: number[] = [];
    let i = 0;
    let j = 0;
    while(i<left.length && j< right.length){
        if(left[i]<right[j]){
            res.push(left[i]);
            i++;
        }else {
            res.push(right[j]);
            j++;
        }
    }
    // push rest of the array
    while(i<left.length){
        res.push(left[i]);
        i++;
    }
    while(j<right.length){
        res.push(right[j]);
        j++;
    }
    return res;
}

let arr = [3,2,5,1,6];
let res = mergeSort(arr);
console.log(res);