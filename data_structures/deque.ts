// double ended queue
class dequeue<T>{
    private items: T[] = [];
    addfront(value: T){
        this.items.unshift(value);
    }
    removeFront(): T|undefined{
        return this.items.shift();
    }
    addRear(value: T){
        this.items.push(value);
    }
    removeRear(){
        return this.items.pop();
    }
    peekFront(): T| undefined{
        return this.items[0];
    }
    peekRear(): T| undefined{
        return this.items[this.items.length - 1];
    }
    isEmpty(): boolean {
        return this.items.length === 0;
    }
    size(): number{
        return this.items.length;
    }
    print(){
        console.log(this.items);
    }
}
const dequeue1 = new dequeue<number>();
dequeue1.addfront(1);
dequeue1.addfront(2);
dequeue1.addfront(3);
dequeue1.addRear(4);
dequeue1.print();
dequeue1.removeFront();
dequeue1.print();
dequeue1.removeRear();
dequeue1.print();




