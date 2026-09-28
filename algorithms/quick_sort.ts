function quick_sort(arr: number[]): number[]{
    if(arr.length<=1){
        return arr;
    }
    let pivot = arr[arr.length-1];
    let left: number[]=[];
    let rigt: number[]=[];
    for(let i=0; i<arr.length-1; i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }else{
            rigt.push(arr[i]);
        }
    }
    return [... quick_sort(left),pivot, ...quick_sort(rigt)];
}

let arr1 = [3,2,5,1,6];
let res1 = quick_sort(arr1);
console.log(res1);