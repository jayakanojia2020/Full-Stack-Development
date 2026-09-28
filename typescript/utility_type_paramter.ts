function add(a: number, b: number) {
    return a + b;
}

type AddParams = Parameters<typeof add>; 
// AddParams will contain number, number
const nums: AddParams = [10, 20];