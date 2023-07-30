class Node {
    constructor(val, prior) {
        this.value = val;
        this.priority = prior;
    }
}

class PriorityQueue {
    constructor() {
        this.arr = [];
    }

    show() {
        console.log(this.arr);
    }

    enqueue(val, prior) {
        let newNode = new Node(val, prior);
        this.arr.push(newNode);
        this.bubbleUp();
    }

    bubbleUp() {
        var currIndex = this.arr.length - 1;
        while(currIndex > 0) {
            if(this.arr[currIndex].priority < this.arr[Math.floor((currIndex - 1)/2)].priority) {
                [this.arr[currIndex], this.arr[Math.floor((currIndex - 1)/2)]] = [this.arr[Math.floor((currIndex - 1)/2)], this.arr[currIndex]];
                currIndex = Math.floor((currIndex - 1)/2)
            }
            else {
                break;
            }
        }
    }

    dequeue() {
        [this.arr[0], this.arr[this.arr.length - 1]] = [this.arr[this.arr.length - 1], this.arr[0]];
        this.arr.pop();
        var currIndex = 0;
        var leftIndex;
        var rightIndex;
        var finish = false;

        while(!finish){
            if(2*currIndex + 1 < this.arr.length - 1) {
                leftIndex = 2*currIndex + 1;
                if(2*currIndex + 2 < this.arr.length - 1) {
                    rightIndex = 2*currIndex + 2;
                    if(Math.min(this.arr[currIndex].priority, this.arr[leftIndex].priority, this.arr[rightIndex].priority) === this.arr[currIndex].priority) {
                        finish = true;
                    }
                    else if(this.arr[leftIndex].priority < this.arr[rightIndex].priority) {
                        [this.arr[currIndex], this.arr[leftIndex]] = [this.arr[leftIndex], this.arr[currIndex]]
                        currIndex = leftIndex
                    }
                    else {
                        [this.arr[currIndex], this.arr[rightIndex]] = [this.arr[rightIndex], this.arr[currIndex]]
                        currIndex = rightIndex
                    }
                }
                else{
                    if(this.arr[currIndex].priority < this.arr[leftIndex].priority) {
                        [this.arr[currIndex], this.arr[leftIndex]] = [this.arr[leftIndex], this.arr[currIndex]]
                        currIndex = leftIndex
                    }
                    else {
                        finish = true
                    }
                }
            }
            else{
                finish = true
            }
        }
    }
}

const prioQueue = new PriorityQueue();
prioQueue.enqueue(10, 3);
prioQueue.enqueue(11, 2);
prioQueue.enqueue(15, 4);
prioQueue.enqueue(16, 2);
prioQueue.enqueue(17, 1);
prioQueue.dequeue();
prioQueue.show()