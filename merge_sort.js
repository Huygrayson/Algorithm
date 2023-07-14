/* Merge function */
/* Time complexity O(arr1.length + arr2.length) */
function mergeSortedArrs(arr1, arr2){
    var currComparedPosArr1 = 0;
    var currComparedPosArr2 = 0;
    var endOfArr1 = false;
    var endOfArr2 = false;
    var mergedArr = [];

    while(!(endOfArr1 || endOfArr2)){
        if(arr1[currComparedPosArr1] === arr2[currComparedPosArr2]){
            mergedArr.push(arr1[currComparedPosArr1]);
            mergedArr.push(arr2[currComparedPosArr2]);
            if(currComparedPosArr1 < arr1.length - 1){
                currComparedPosArr1++
            }
            else{
                endOfArr1 = true
            }
            if(currComparedPosArr2 < arr2.length - 1){
                currComparedPosArr2++
            }
            else{
                endOfArr2 = true
            }
        }
        else if(arr1[currComparedPosArr1] > arr2[currComparedPosArr2]){
            mergedArr.push(arr2[currComparedPosArr2]);
            if(currComparedPosArr2 < arr2.length - 1){
                currComparedPosArr2++
            }
            else{
                endOfArr2 = true
            }
        }
        else{
            mergedArr.push(arr1[currComparedPosArr1]);
            if(currComparedPosArr1 < arr1.length - 1){
                currComparedPosArr1++
            }
            else{
                endOfArr1 = true
            }
        }
    }

    if(!(endOfArr1 && endOfArr2)){
        if(endOfArr1){
            return mergedArr.concat(arr2.slice(currComparedPosArr2))
        }
        else{
            return mergedArr.concat(arr1.slice(currComparedPosArr1))
        }
    }
    else{
        return mergedArr
    }
    
}

/* Time complexity O((arr1.length + arr2.length)*the_splitting_times = nlogn) */
function mergeSort(arr){
    if(arr.length <= 1) return arr;
    var mid = Math.floor(arr.length/2);
    var left = mergeSort(arr.slice(0, mid));
    var right = mergeSort(arr.slice(mid));
    return mergeSortedArrs(left, right);
}

console.log(mergeSort([2,7,1,6,5]));