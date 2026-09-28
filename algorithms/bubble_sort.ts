function  bubble_sort(arr:number[]) {
    const n = arr.length;
    for(let i=0; i<n-1; i++){
         let swapped = false;
        for(let j=0;j<n-1-i; j++){
            if(arr[j]>arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1],arr[j]];
                swapped = true;
            }
        }
        if(!swapped){
            break;
        }
    }
}
let a1 = [5,1,2,10,20,4,3];
bubble_sort(a1);
console.log(a1);