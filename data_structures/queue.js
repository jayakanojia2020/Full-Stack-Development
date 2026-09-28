"use strict";
class Queue {
    queue = [];
    enqueue(item) {
        this.queue.push(item);
    }
    dequeue() {
        return this.queue.shift();
    }
    front() {
        if (this.queue.length === 0) {
            return undefined;
        }
        return this.queue[0];
    }
    rear() {
        if (this.queue.length === 0) {
            return undefined;
        }
        return this.queue[this.queue.length - 1];
    }
    isEmpty() {
        return this.queue.length === 0;
    }
    size() {
        return this.queue.length;
    }
    clear() {
        this.queue = [];
    }
    print() {
        this.queue.forEach(item => console.log(item));
    }
}
const queue1 = new Queue();
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
