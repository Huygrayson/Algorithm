function selectionSort(arr){
    var noSwap;
    for(var i = 0; i < arr.length - 1; i++){
        noSwap = true
        for(var j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[i]){
                [arr[i], arr[j]] = [arr[j], arr[i]];
                noSwap = false;
            }
        }
        if(noSwap) break;
    }
    return arr
}

console.log([10,3,5,7,1]);
console.log(selectionSort([10,3,5,7,1]));