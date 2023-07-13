function binarySearch(sortedArr, val){
    var startIndex = 0;
    var endIndex = sortedArr.length - 1;
    var middle = Math.floor((startIndex + endIndex)/2);
    while(val !== sortedArr[middle] && startIndex <= endIndex){
        if(val > sortedArr[middle]){
            startIndex = middle + 1
        }
        else{
            endIndex = middle - 1
        }
        middle = Math.floor((startIndex + endIndex)/2);
    }
    return sortedArr[middle] === val? middle: -1;
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 8));