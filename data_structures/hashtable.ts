class HashTable<T>{
    private table: T[] = [];
    constructor(private capacity: number = 10){
        this.table.length = capacity;
    }
    private hash(key:string):number{
        let hash = 0;
        for( let ch of key){
            hash += ch.charCodeAt(0);
        }
        return hash % this.capacity;
    }
    set(key: string, value: T){
        const hashIndex = this.hash(key);
        this.table[hashIndex] = value;
    }
    get(key:string): T{
        return this.table[this.hash(key)];
    }
}
const hashValues = new HashTable<number>();
hashValues.set("jaya", 32);
hashValues.set("karam", 40);
console.log(hashValues.get("jaya"));
console.log(hashValues.get("karam"));