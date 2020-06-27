var findTheDistanceValue = function(arr1, arr2, d) {
    let count = 0;
    for(let currentNum of arr1){
        for(let j = 0; j<arr2.length; j++){
            if(Math.abs(currentNum-arr2[j]) <= d)
                break
            if(j === arr2.length-1)
                count++
        }
    }
    return count
};