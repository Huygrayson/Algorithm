function linearSearch(arr, val){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === val){
            return i;
        }
    }
    return -1
};

console.log(linearSearch([1,4,2,7,9], 4));