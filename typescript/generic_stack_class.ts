class Stack<T>{
    private items: T[] = [];
    push(item: T){
        this.items.push(item);
    }
    pop(): T|undefined{
        return this.items.pop();
    }
}
const s1 = new Stack<number>();
s1.push(10);
s1.push(9);
console.log(s1.pop());