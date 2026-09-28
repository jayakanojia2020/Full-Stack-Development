"use strict";
class HashTable {
    capacity;
    table = [];
    constructor(capacity = 10) {
        this.capacity = capacity;
        this.table.length = capacity;
    }
    hash(key) {
        let hash = 0;
        for (let ch of key) {
            hash += ch.charCodeAt(0);
        }
        return hash % this.capacity;
    }
    set(key, value) {
        const hashIndex = this.hash(key);
        this.table[hashIndex] = value;
    }
    get(key) {
        return this.table[this.hash(key)];
    }
}
const hashValues = new HashTable();
hashValues.set("jaya", 32);
hashValues.set("karam", 40);
console.log(hashValues.get("jaya"));
console.log(hashValues.get("karam"));
