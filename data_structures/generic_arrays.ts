function printArrayElements<T>(array: T[]){
    array.forEach(item=> console.log(item));
}
printArrayElements<number>([1,2,3]);
printArrayElements<string>(["abc", "edf", "ghi"]);