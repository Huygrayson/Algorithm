function selectionSort(arr){
    var noSwap;
    var minVal;
    var minPos;
    for(var i = 0; i < arr.length - 1; i++){
        noSwap = true
        minVal = arr[i];
        for(var j = i + 1; j < arr.length; j++){
            if(arr[j] < minVal){
                minVal = arr[j];
                minPos = j;
                noSwap = false;
            }
        }
        if(!noSwap){
            [arr[i], arr[minPos]] = [arr[minPos], arr[i]];
        }
    }
    return arr
}

console.log([10,3,5,7,1]);
console.log(selectionSort([10,3,5,7,1]));
console.log(selectionSort([0]));