function selection_sort(arr: number[]){
    const n = arr.length;
    for(let i=0;i<n-1; i++){
        let min_index = i;
        for(let j=i+1; j<n; j++){
            if(arr[j]<arr[min_index]){
                min_index=j;
            }
        }
        if(min_index!=i){
            [arr[min_index], arr[i]] =
            [arr[i], arr[min_index]];
        }
    }
}

const numbers = [64, 25, 12, 22, 11];
selection_sort(numbers);
console.log(numbers);