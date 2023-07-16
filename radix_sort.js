/* Return the digit in num at the given place value 
   Eg: getDigit(12345, 0) ret 5
       getDigit(12345, 1) ret 4
       getDigit(12345, 4) ret 1
       getDigit(12345, 5) ret 0*/
function getDigit(num, place){
    return Math.floor(Math.abs(num)/Math.pow(10, place))%10
}

function digitCount(num){
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

function retMaxDigit(arr){
    var maxDigit = digitCount(arr[0]);
    for(var i = 1; i < arr.length; i++){
        maxDigit = Math.max(maxDigit, digitCount(arr[i]))
    }
    return maxDigit
}

function radixSort(arr){
    var maxDigitCount = retMaxDigit(arr);
    for(var i = 0; i < maxDigitCount; i++){
        var digitBuckets = Array.from({length: 10}, () => []);
        for(var j = 0; j < arr.length; j++){
            digitBuckets[getDigit(arr[j], i)].push(arr[j]);
        }
        arr = [].concat(...digitBuckets);
    }
    return arr
}

console.log(radixSort([2, 34, 527, 7777, 12590, 5381]));