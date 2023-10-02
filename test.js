const add = (nums) => {
    let sum = 0; 
    nums.map((each) =>{
        sum+=each;
    });
    return sum
}

console.log("pool1: ", add([16,15,9,6,14,11]))
console.log("pool2: ", add([10,13,9,13,10,7]))
console.log("pool3: ", add([12,5,6,13,8,13]))

[ 6, 9, 11, 14, 15, 16 ]