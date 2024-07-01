// check num is palindrome of not 
// by using loop


function checkpalindromeNum(num){

    let copyNum=num, reverseNum=0;
    while (copyNum > 0){
        let lastDigits= copyNum % 10;
        reverseNum = reverseNum * 10 + lastDigits;
        copyNum = Math.floor(copyNum /10);

    }
    return num === reverseNum ? 'Number is Palindrome ' : ' Number is not palindrome'


}

console.log("checkpalindromeNum===>",checkpalindromeNum(121));



// palindrome check

function checkpalindromeNum2(num){
    let numToStr=num.toString();
    let reverseStr=numToStr.split('').reverse().join('');

    return reverseStr === numToStr ? 'Number is Palindrome ' :' Not palindrome'
}

console.log("checkpalindromeNum2=====>>",checkpalindromeNum2(12121))
