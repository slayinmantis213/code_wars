function filter_list(l) {
    var arr = l.filter(Number);
    return arr
}

console.log(filter_list(['hello', 0, 2, 'whatsup', 5, 7]))

function squareSum(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i] ** 2
    }
    return sum;
}

// Sum Numbers
function sum(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
};

const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);


// return masked string
function maskify(cc) {
    if (cc.length < 5) {
        return cc;
    }
    var temp = '';
    for (var i = 0; i < cc.length - 4; i++) {
        temp += '#';
    }
    temp += cc.slice(cc.length - 4);
    cc = temp;
    return cc;
}

console.log(maskify('129384761239450189273598'))