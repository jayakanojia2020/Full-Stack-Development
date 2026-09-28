"use strict";
class Stack {
    items = [];
    push(value) {
        this.items.push(value);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    clear() {
        this.items = [];
    }
    print() {
        console.log(this.items);
    }
}
const stack1 = new Stack();
stack1.push(1);
stack1.push(2);
stack1.push(3);
stack1.push(4);
stack1.push(5);
stack1.print();
console.log("Pop an element: ", stack1.pop());
console.log("Peek: ", stack1.peek());
console.log("Empty: ", stack1.isEmpty());
console.log("Size: ", stack1.size());
console.log("Clear: ", stack1.clear());
stack1.print();
