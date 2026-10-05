// binary number generation
function generateBinaryString(N: number){
    const result: string[]=[];
    function backtrack(current: string){
        if(current.length === N){
            result.push(current);
            return;
        }
        backtrack(current+"0");
        backtrack(current+"1");
    }
    backtrack("");
    return result;
}
console.log(generateBinaryString(4));

// subset generation

