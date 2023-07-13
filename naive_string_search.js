function naiveSearch(longStr, shortStr){
    var startLong = 0;
    var count = 0;
    while(longStr.length - startLong >= shortStr.length){
        for(var i = 0; i < shortStr.length; i++){
            if(shortStr[i] !== longStr[startLong + i]){
                break;
            }
            if(shortStr[i] === longStr[startLong + i] && i === shortStr.length - 1){
                count++;
            }
        }
        startLong++;
    }
    return count;
}

console.log(naiveSearch("abchelloabc", "c"));