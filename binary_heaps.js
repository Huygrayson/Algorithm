class MaxBinaryHeap {
    constructor() {
        this.arr = [];
    }
    bubbleUp(value) {
        console.log(this.arr.indexOf(value));
    }
    insert(value) {
        this.arr.push(value);
        this.bubbleUp(value);
    }
}

const maxBinaryHeap = new MaxBinaryHeap();

maxBinaryHeap.insert(10);
maxBinaryHeap.insert(20);