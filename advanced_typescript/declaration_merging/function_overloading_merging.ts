function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: any, b: any) {
    return a + b;
}

console.log(add(2,3));
console.log(add("Hi ","Jaya"));