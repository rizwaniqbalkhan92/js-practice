// Fabonacci Series

function fabonacci(number){
    if(number<2){
        return number
    }


    let next ,previous , current;

    for(let i=2; i<=number; i++){
        next = previous+current;
        previous = current;
        current = next
    }

    return next


}


console.log("FIBONACCI===>>",fabonacci(10))

// Example 2

function fabonacci2(n){
    let fibSer=[0,1];
    for(let i=2; i<n; i++){
        fibSer[i]=fibSer[i-1]+fibSer[i-2];

    }
    return fibSer
}

console.log("FIB2===>>",fabonacci2(10));


