function longStr(str){
    let longWord = str.split(" ").reduce(function(acc, curr){
        if(acc.length < curr.length){
            return curr
        }else return acc;
    })
    return longWord;
};

console.log(longStr("Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam"));