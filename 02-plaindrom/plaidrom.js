// write your func here

function palindrome(str){
    let lowStr = str.toLowerCase();
    let reverseStr = lowStr.split("").reverse().join("");
    if(reverseStr === lowStr){
        return true;
    }else return false;
};

console.log(palindrome("amir"));