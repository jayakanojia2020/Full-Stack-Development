class maxHeap{
    private heap: number[] = [];
    private parentIndex(index: number): number{
        return Math.floor((index - 1)/2);
    }
    private leftChildIndex(index: number): number{
        return 2*index+1;
    }
    private rightChildIndex(index: number): number{
        return 2*index+2;
    }
    private swap(index1: number, index2: number){
        [this.heap[index1], this.heap[index2]] = 
        [this.heap[index2], this.heap[index1]];
    }
    inserElement(element: number){
        // push the element in heap array
        this.heap.push(element);
        if(this.heap.length === 1)
            return;
        // check if the parent of all nodes are as per max heap rule
        let currentIndex = this.heap.length - 1;
        while(currentIndex>0){
            let parentIndex = this.parentIndex(currentIndex);
            if(this.heap[currentIndex] > this.heap[parentIndex]){
                this.swap(currentIndex, parentIndex);
                currentIndex = parentIndex;
            }
            return;
        }
    }
    // get the maximum element
    peek(){
        return this.heap[0];
    }
    // extract the max element
    extractMax(){
        if(this.heap.length === 0)
            return undefined;
        if(this.heap.length === 1)
            return this.heap[0];
        let max = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        // heapify down
        this.heapifyDown();
        return max;
    }
    heapifyDown(){
        let currentIndex = 0;
        const size= this.heap.length;
        while(true){
            let leftChildIndex = this.leftChildIndex(currentIndex);
            let rightChildIndex = this.rightChildIndex(currentIndex);
            let largestIndex = currentIndex;
            if(leftChildIndex<size&&
                this.heap[leftChildIndex]>this.heap[largestIndex]
            ){
                largestIndex = leftChildIndex;
            }
            if(rightChildIndex<size && 
                this.heap[rightChildIndex] > this.heap[largestIndex]
            ){
                largestIndex = rightChildIndex;
            }
            if(largestIndex === currentIndex){
                break;
            }
            this.swap(largestIndex,currentIndex);
            currentIndex = largestIndex;
        }
    }
    getHeap(){
        console.log(this.heap);
    }
}
// create object
let heap1 = new maxHeap();
heap1.inserElement(30);
heap1.inserElement(10);
heap1.inserElement(50);
heap1.inserElement(20);
heap1.inserElement(40);
heap1.getHeap();
console.log(heap1.peek());
console.log(heap1.extractMax());
heap1.getHeap();