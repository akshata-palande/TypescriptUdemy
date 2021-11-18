//built in classes
//1.regular expression
let regExp = new RegExp('ab+c');



//2. Array
let array:Array<number> = [1,2,3];


//3. Set
let set:Set<number> = new Set([1,2,3]);


//4. Queue FIFO collection

class Queue<T>{
    private data:Array<T> =[];
    push(item:T){this.data.push(item)};
    pop():T|undefined{return this.data.shift();}
}

let queue :Queue<number> = new Queue();