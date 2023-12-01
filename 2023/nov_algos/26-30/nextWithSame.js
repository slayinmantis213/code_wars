// Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

// For example:

// nextSmaller(21) == 12
// nextSmaller(531) == 513
// nextSmaller(2071) == 2017
// Return -1 (for Haskell: return Nothing, for Rust: return None), when there is no smaller number that contains the same digits.
// Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.

// nextSmaller(9) == -1
// nextSmaller(111) == -1
// nextSmaller(135) == -1
// nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros
// some tests will include very large numbers.
// test data only employs positive integers.
// The function you write for this challenge is the inverse of this kata: "Next bigger number with the same digits."


//this is too inefficient for code wars. whatever.
function nextSmaller(n) {
    let str = n.toString();
    if (str.length < 2) {
        return -1;
    }
    let digitCount = new Array(10).fill(0);
    for (let digit of str) {
        digitCount[parseInt(digit)]++;
    }

    let iter = n
    while (iter.toString().length === str.length) {
        iter--;
        let iterDigitCount = new Array(10).fill(0);

        for (let digit of iter.toString()) {
            iterDigitCount[parseInt(digit)]++;
        }

        if (JSON.stringify(digitCount) === JSON.stringify(iterDigitCount)) {
            return iter;
        }
    }

    return -1;
}
console.log(nextSmaller());
