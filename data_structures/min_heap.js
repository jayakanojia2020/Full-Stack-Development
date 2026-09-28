"use strict";
class MinHeap {
    heap = [];
    parentIndex(index) {
        return Math.floor((index - 1) / 2);
    }
    leftIndex(index) {
        return 2 * index + 1;
    }
    rightIndex(index) {
        return 2 * index + 2;
    }
    insert(value) {
        this.heap.push(value);
        this.heapifUp();
    }
    heapifUp() {
        let index = this.heap.length - 1;
        while (index > 0 &&
            this.heap[index] < this.heap[this.parentIndex(index)]) {
            let parentIndex = this.parentIndex(index);
            [this.heap[index], this.heap[parentIndex]] =
                [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }
    extractMin() {
        if (this.heap.length === 0) {
            return 0;
        }
        if (this.heap.length === 1) {
            return this.heap[0];
        }
        let min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return min;
    }
    heapifyDown() {
        let index = 0;
        while (true) {
            let leftIndex = this.leftIndex(index);
            let rightIndex = this.rightIndex(index);
            let smallest = index;
            if (leftIndex < this.heap.length &&
                this.heap[leftIndex] < this.heap[smallest]) {
                smallest = leftIndex;
            }
            if (rightIndex < this.heap.length &&
                this.heap[rightIndex] < this.heap[smallest]) {
                smallest = rightIndex;
            }
            if (smallest === index) {
                break;
            }
            [this.heap[smallest], this.heap[index]] =
                [this.heap[index], this.heap[smallest]];
            index = smallest;
        }
    }
    display() {
        console.log(this.heap);
    }
}
const minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(20);
minHeap.insert(2);
minHeap.insert(8);
minHeap.display();
console.log(minHeap.extractMin());
minHeap.display();
