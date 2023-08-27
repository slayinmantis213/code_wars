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