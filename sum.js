
// // sum of natural numbers


// function sumOfNaturalNumbers(start,numEnd){
// let sum =0;
//     for(let i=start; i <= numEnd; i ++){
// sum = sum + i;

     

//     }
//     return sum
// }
// function sumOfNaturalNumbersWithFormula(start,numEnd){
// // return num*(num + 1 )/2;
// let sumToEnd= numEnd * (numEnd +1)/2;
// let startSumMinus1=start * (start-1)/2;
// return sumToEnd-startSumMinus1;


// }


// let sumOfNumFormula=sumOfNaturalNumbersWithFormula(startFrom=3, end=5);
// console.log("SUM_OF_NATURAL_NUMBERS_FORMULA===>>",sumOfNumFormula);
// let sumOfNum=sumOfNaturalNumbers(startFrom=3, end=5);
// console.log("SUM_OF_NATURAL_NUMBERS===>>",sumOfNum);



// // Sum of digits of a numbers


// function getSumOfDigitsNum(number){
//     let numStr= number.toString();
//     let sum=0;
//     for(let char of numStr){
//         sum += parseInt(char,10);
//     }
//     return sum;
// }

// const numDigits=getSumOfDigitsNum(123456789);
// console.log("SUM_DIGITS==>>",numDigits);

// function getSumOfDigitsNum2(number){

//     let sum=0;
//     while(number>0){
//         let lastDigit=number%10;
        
//         sum += lastDigit;
//         number = Math.floor(number/10);

//     }

//     return sum

// }

// const getDigit2=getSumOfDigitsNum2(123456789)

// console.log("SUM_DIGITS==>>2",getDigit2)


// function getDigitOfNum(numbers){
//     let num = Math.abs(numbers);
//     let count =0;
//     do{
//         count ++;

//     }while(num>0)
//   return count
// }

// console.log("digitOfCountNum",getDigitOfNum(123455))