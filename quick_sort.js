/* Take the first element of an array as a pivot then move it to the position where 
it should be when the array is sorted and return that position */
function retPivotSortedIndex(arr, startIndex=0, stopIndex=arr.length - 1){
    var currLastLowerValIndex = startIndex;
    var currComparedIndex = startIndex + 1;

    while(currComparedIndex <= stopIndex){
        if(arr[currComparedIndex] < arr[startIndex]){
            [arr[currLastLowerValIndex + 1], arr[currComparedIndex]] = [arr[currComparedIndex], arr[currLastLowerValIndex + 1]];
            currLastLowerValIndex++;
        }
        currComparedIndex++
    }
    [arr[startIndex], arr[currLastLowerValIndex]] = [arr[currLastLowerValIndex], arr[startIndex]];

    return currLastLowerValIndex;
}

/* No new array is created. Everything is handled on the input array */
function quickSort(arr, startIndex=0, stopIndex=arr.length - 1){
    if(startIndex < stopIndex){ 
        var pivotIndex = retPivotSortedIndex(arr, startIndex, stopIndex);
        // left
        quickSort(arr, startIndex, pivotIndex - 1);
        // right
        quickSort(arr, pivotIndex + 1, stopIndex);
    }
    return arr;
}

console.log([3,4,5,2,1]);
console.log(quickSort([3,4,5,2,1]));