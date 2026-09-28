class Queue<T>{
    private queue: T[] = [];
    enqueue(item: T){
        this.queue.push(item);
    }
    dequeue(): T| undefined{
        return this.queue.shift();
    }
    front(): T| undefined{
        if(this.queue.length === 0){
            return undefined;
        }
        return this.queue[0];
    }
    rear(): T| undefined{
        if(this.queue.length === 0){
            return undefined;
        }
        return this.queue[this.queue.length-1];
    }
    isEmpty(): boolean {
        return this.queue.length === 0;
    }
    size(): number{
        return this.queue.length;
    }
    clear(){
        this.queue = [];
    }
    print(){
        this.queue.forEach(item => console.log(item));
    }
}
const queue1 = new Queue<number>();
queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);
queue1.print();
console.log("Dequeue: ", queue1.dequeue());
console.log("front: ", queue1.front());
console.log("rear: ", queue1.rear());
console.log("size: ", queue1.size());
console.log("clear: ", queue1.clear());
queue1.print();