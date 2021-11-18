"use strict";
//built in classes
//1.regular expression
let regExp = new RegExp('ab+c');
//2. Array
let array = [1, 2, 3];
//3. Set
let set = new Set([1, 2, 3]);
//4. Queue FIFO collection
class Queue {
    constructor() {
        this.data = [];
    }
    push(item) { this.data.push(item); }
    ;
    pop() { return this.data.shift(); }
}
let queue = new Queue();
