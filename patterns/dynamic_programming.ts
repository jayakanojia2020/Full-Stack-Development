// store previous answer.
function fib(n: number, memo: number[]=[]): number{
    if(n<=1){
        return n;
    }
    if(memo[n]!== undefined){
        return memo[n];
    }
    memo[n]= fib(n-1, memo) + fib(n-2, memo);
    return memo[n];
}
console.log(fib(8));