// write your func here

function similarArrays(arr1, arr2){
    if(arr1.length != arr2.length){
        return false;
    }else {
        let result = true;

        for(let item = 0; item < arr1.length; item++){
            if(arr1[item] !== arr2[item]){
                return false;
            };
        };
        return result;
    };
};

console.log(similarArrays([1, 2, 3], [1, 2, 3]));