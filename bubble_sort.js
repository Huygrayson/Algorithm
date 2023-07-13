function bubbleSort(arr){
    var noSwap;
    for(var i = 1; i < arr.length; i++){
        noSwap = true;
        for(var j = 0; j < arr.length - i; j++){
            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                noSwap = false;
            }
        }
        if(noSwap) break;
    }
    return arr
}

console.log([2,4,5,3,7,1]);
console.log(bubbleSort([2,4,5,3,-7,1]));
