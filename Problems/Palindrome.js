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



