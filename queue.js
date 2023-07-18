class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    } 
}

class Stack{
    constructor(){
        this.start = null;
        this.end = null;
        this.size = 0;
    }
    show(){
        console.log(this.start);
        console.log(this.end);
        console.log(this.size);
        console.log("----------------------------");
    }
    push(val){
        const newStackVal = new Node(val);
        if(this.size === 0){
            this.start = newStackVal;
            this.end = newStackVal;
        }
        else{
            this.end.next = newStackVal;
            this.end = newStackVal;
        }
        this.size++;
    }
    shift(){
        if(!this.start) return undefined;
        var newHead = this.start.next;
        this.start = newHead;
        this.size--;
        if(this.size === 0){
            this.end = null;
        }
    }
}

const stack = new Stack();
stack.push("A");
stack.push("B");
stack.push("C");
stack.push("D");
stack.push("E");
stack.show();
stack.shift();
stack.shift();
stack.shift();
stack.shift();
stack.shift();
stack.show();