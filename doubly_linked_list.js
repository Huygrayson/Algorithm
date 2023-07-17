class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    show(){
        console.log(this.head);
        console.log(this.tail);
        console.log(this.length);
        console.log("----------------------------");
    }
    // add new node to the end
    push(val){
        const newNode = new Node(val)
        if(this.head === null){
            this.head = newNode;
            this.tail = this.head
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++
    }
    // remove the last node
    pop(){
        if(!this.head) return undefined;
        var currentNode = this.head;
        var newTail = currentNode;
        while(currentNode.next){
            newTail = currentNode;
            currentNode = currentNode.next
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        return currentNode
    }
    // remove the first node
    shift(){
        if(!this.head) return undefined;
        var newHead = this.head.next;
        this.head = newHead;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
    }
    // add new node to the beginning of the list
    unshift(val){
        const newNode = new Node(val)
        if(this.head === null){
            this.head = newNode;
            this.tail = this.head
        }
        else{
            newNode.next = this.head;
            this.head = newNode
        }
        this.length++;
    }
    // retreive a node by it's position in the linked list
    get(pos){
        var currentNode = this.head;
        if(pos < 0 || pos >= this.length){
            return null;
        }
        for(var i = 0; i < this.length; i++){
            if(i === pos){
                return currentNode
            }
            currentNode = currentNode.next;
        }
    }
    // change the value of a node via it's position in the list
    set(pos, val){
        var currentNode = this.head;
        if(pos < 0 || pos >= this.length){
            return "Invalid position";
        }
        for(var i = 0; i < this.length; i++){
            if(i === pos){
                currentNode.val = val;
                return currentNode;
            }
            currentNode = currentNode.next;
        }
    }
    // insert a node to a specific position
    insert(pos, val){
        const insertedNode = new Node(val)
        if(pos < 0 || pos > this.length){
            return "Invalid position";
        }
        if(pos === 0){
            this.unshift(val)
        }
        else if(pos === this.length){
            this.push(val)
        }
        else{
            var currentNode = this.head;
            for(var i = 0; i < pos - 1; i++){
                currentNode = currentNode.next;
            }
            var temp = currentNode;
            currentNode.next = insertedNode;
            insertedNode.next = temp;
        }
        this.length++;
    } 
    // remove a node in a specific position
    remove(pos){
        if(pos < 0 || pos >= this.length){
            return "Invalid position";
        }
        if(pos === 0){
            this.shift()
        }
        else if(pos === this.length - 1){
            this.pop()
        }
        else{
            var currentNode = this.head;
            for(var i = 0; i < pos - 1; i++){
                currentNode = currentNode.next;
            }
            currentNode.next = currentNode.next.next;
        }
        this.length--;
    }
    // reverse the linked list in place
    reverse(){
        var currNode = this.head;
        this.head = this.tail;
        this.tail = currNode;
        var next;
        var prev = null;
        for(var i = 0; i< this.length; i++){
            next = currNode.next;
            currNode.next = prev;
            prev = currNode;
            currNode = next;
        }
    }
}

const list = new LinkedList();
// list.show();
list.push("Hello");
// list.show();
list.push("Huy");
// list.show();
list.push("Hi");
list.show();
list.reverse();
list.show();