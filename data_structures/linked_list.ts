//Unlike arrays, linked lists do not require contiguous memory.
class NodeClass<T>{
    constructor(
        public data: T,
        public next: NodeClass<T> | null = null
    ){
    }
}
class linkedList<T>{
    private head: NodeClass<T>| null = null;
    append(value: T){
        const node = new NodeClass(value);
        if(this.head === null){
            this.head = node;
            return;
        }
        let current = this.head;
        while(current.next !== null) {
            current = current.next;
        }
        current.next = node;
    }
    print(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

const L1 = new linkedList<number>;
L1.append(3);
L1.append(4);
L1.append(5);
L1.print();