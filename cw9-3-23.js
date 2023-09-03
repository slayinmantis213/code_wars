// mine
var isSquare = function (n) {
    var num = Math.sqrt(n);
    if (num % 1 === 0) {
        return true;
    }
    return false;
}

//solution

function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
}

// ----------------------------------------------------------------  //


// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. 
// If the two numbers are equal return a or b.

// Note: a and b are not ordered!

//mine
function getSum(a, b) {
    var sum = 0;
    if (a < b) {
        for (var i = a; i <= b; i++) {
            sum += i;
        }
        return sum;
    } else if (b < a) {
        for (var i = b; i <= a; i++) {
            sum += i;
        }
        return sum;
    } else {
        return a;
    }
}
console.log(getSum(10, 10))

//solutions

const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
}

function GetSum(a, b) {
    tmp = 0;

    if (a < b)
        while (a <= b) tmp += a++;
    else
        while (a >= b) tmp += a--;

    return tmp;
}