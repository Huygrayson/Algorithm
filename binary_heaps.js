class MaxBinaryHeap {
    constructor() {
        this.arr = [];
    }

    show() {
        console.log(this.arr);
    }

    bubbleUp() {
        var currIndex = this.arr.length - 1;
        while(currIndex > 0) {
            if(this.arr[currIndex] > this.arr[Math.floor((currIndex - 1)/2)]) {
                [this.arr[currIndex], this.arr[Math.floor((currIndex - 1)/2)]] = [this.arr[Math.floor((currIndex - 1)/2)], this.arr[currIndex]];
                currIndex = Math.floor((currIndex - 1)/2)
            }
            else {
                break;
            }
        }
    }

    insert(value) {
        this.arr.push(value);
        this.bubbleUp();
    }

    extractMax() {
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
                    if(Math.max(this.arr[currIndex], this.arr[leftIndex], this.arr[rightIndex]) === this.arr[currIndex]) {
                        finish = true;
                    }
                    else if(this.arr[leftIndex] > this.arr[rightIndex]) {
                        [this.arr[currIndex], this.arr[leftIndex]] = [this.arr[leftIndex], this.arr[currIndex]]
                        currIndex = leftIndex
                    }
                    else {
                        [this.arr[currIndex], this.arr[rightIndex]] = [this.arr[rightIndex], this.arr[currIndex]]
                        currIndex = rightIndex
                    }
                }
                else{
                    if(this.arr[currIndex] > this.arr[leftIndex]) {
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

const maxBinaryHeap = new MaxBinaryHeap();

maxBinaryHeap.insert(10);
maxBinaryHeap.insert(20);
maxBinaryHeap.insert(30);
maxBinaryHeap.insert(25);
maxBinaryHeap.insert(27);
maxBinaryHeap.insert(35);
maxBinaryHeap.insert(31);
maxBinaryHeap.extractMax();
maxBinaryHeap.show()