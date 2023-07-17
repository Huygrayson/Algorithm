class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
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
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode
        }
        else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
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
        this.tail.prev = this.tail;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return currentNode
    }
    // remove the first node
    shift(){
        if(!this.head) return undefined;
        var newHead = this.head.next;
        this.head = newHead;
        this.head.prev = null;
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
        if(pos <= Math.floor(this.length/2)){
            for(var i = 0; i < this.length; i++){
                if(i === pos){
                    return currentNode
                }
                currentNode = currentNode.next;
            }
        }
        else{
            for(var i = this.length - 1; i >= 0; i--){
                if(i === pos){
                    return currentNode
                }
                currentNode = currentNode.prev;
            }
        }
    }
    // change the value of a node via it's position in the list
    set(pos, val){
        var currentNode = this.head;
        if(pos < 0 || pos >= this.length){
            return "Invalid position";
        }
        if(pos <= Math.floor(this.length/2)){
            for(var i = 0; i < this.length; i++){
                if(i === pos){
                    currentNode.val = val;
                    return currentNode;
                }
                currentNode = currentNode.next;
            }
        }
        else{
            for(var i = this.length - 1; i >= 0; i--){
                if(i === pos){
                    currentNode.val = val;
                    return currentNode;
                }
                currentNode = currentNode.prev;
            }
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
            if(pos <= Math.floor(this.length/2)){
                var currentNode = this.head;
                for(var i = 0; i < pos - 1; i++){
                    currentNode = currentNode.next;
                }
                var temp = currentNode.next;
                currentNode.next = insertedNode;
                insertedNode.next = temp;
            }
            else{
                var currentNode = this.tail;
                for(var i = this.length - 1; i > pos + 1; i--){
                    currentNode = currentNode.prev;
                }
                var temp = currentNode.prev;
                currentNode.prev = insertedNode;
                insertedNode.prev = temp;
            }
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
}

const list = new LinkedList();
// list.show();
list.push("Hello");
// list.show();
list.push("Huy");
// list.show();
list.push("Hi");
list.show();
list.insert(2, "123");
list.show()