// write your func here

for(let item = 1; item <= 100 ; item++){
    if(item % 3 === 0 && item % 5 === 0){
        console.log("FizzBuzz");
    }
    else if(item % 3 === 0){
        console.log("Fizz");
    }
    else if(item % 5 === 0){
        console.log("Buzz");
    }else console.log(item);
};