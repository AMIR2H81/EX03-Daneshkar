// write your func here

function factorial(num){
    let result = num;
    if(num === 0 || num === 1){
        return 1;
    }
    else if(num > 1){
        while(num > 1){
            num--;
            result *= num;
        }
    }else return "choose a bigger than 0 number please";

    return result;
};

console.log(factorial(5));