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
    pop(){
        if(!this.start) return undefined;
        var currentNode = this.start;
        var newEnd = currentNode;
        while(currentNode.next){
            newEnd = currentNode;
            currentNode = currentNode.next
        }
        this.end = newEnd;
        this.end.next = null;
        this.size--;
        if(this.size === 0){
            this.start = null;
            this.end = null;
        }
        return currentNode
    }
}

const stack = new Stack();
stack.push("A");
stack.push("B");
stack.push("C");
stack.push("D");
stack.push("E");
stack.show();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.show();