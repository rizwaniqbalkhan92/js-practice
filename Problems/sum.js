
// sum of digits of number by using while loop

function sumOfDigits(num){

    let sum=0;
    if(typeof num === 'number'){

        while(num>0){
            sum += num % 10;
            num = Math.floor(num / 10);

        }

    }
return sum;

}
console.log("SUM_OF_DIGITS==>",sumOfDigits(223434))


// Count of Digits

function CountOfDigits(num){
    let count =0;
    num = num.toString();
    if(typeof num === 'string'){
         sum= num.length;

    }
    
    return count
}


console.log("CountOF Digits==>",CountOfDigits(223434))


// Count the Number of Digits by Loop


function CountOfDigitsOfNumber(num){
    let count = 0;
    num = Math.abs(num);

    do{
        count ++;
         num= Math.floor(num /10);

    } while (num>0)
return count;

}

console.log("COUNT_NUMBER_OF DIGITS==>>",CountOfDigitsOfNumber(23124));

var twoSum = function (nums, target) {


    var arr=[];
    for(let i=0; i<nums?.length; i++){
        if(nums[i] + nums [i + 1] === target ){
            arr.push(i);
            arr.push(i+1);
        }
    }
    return arr

};

console.log("CHECK===>>", twoSum([3,4,9,6,4], 8))




