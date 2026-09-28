"use strict";
// double ended queue
class dequeue {
    items = [];
    addfront(value) {
        this.items.unshift(value);
    }
    removeFront() {
        return this.items.shift();
    }
    addRear(value) {
        this.items.push(value);
    }
    removeRear() {
        return this.items.pop();
    }
    peekFront() {
        return this.items[0];
    }
    peekRear() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    print() {
        console.log(this.items);
    }
}
const dequeue1 = new dequeue();
dequeue1.addfront(1);
dequeue1.addfront(2);
dequeue1.addfront(3);
dequeue1.addRear(4);
dequeue1.print();
dequeue1.removeFront();
dequeue1.print();
dequeue1.removeRear();
dequeue1.print();
