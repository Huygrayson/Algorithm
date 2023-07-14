function insertionSort(arr){
    if(arr.length === 1){
        return arr
    }
    for(var i = 1; i < arr.length; i++){
        if(arr[i] < arr[i - 1]){
            [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
            for(var j = i - 1; j > 0; j--){
                if(arr[j] < arr[j - 1]){
                    [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
                }
                else break;
            }
        }
    }
    return arr
}

console.log([7,2,5,3,6,4,-1,1,0,-2]);
console.log(insertionSort([7,2,5,3,6,4,-1,1,0,-2]));
console.log(insertionSort([1]));