function insertionSort(arr){
    for(var i = 1; i < arr.length; i++){
        for(var j = i - 1; j >= 0; j--){
            if(arr[i] < arr[j]){
                [arr[j], arr[i]] = [arr[i], arr[j]]
            }
        }
    }
    return arr
}

console.log([7,2,5,3,6,4]);
console.log(insertionSort([7,2,5,3,6,4]));