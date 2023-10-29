let test =
    [
        [1, 2, 3, 4, 5, 6],
        [20, 21, 22, 23, 24, 7],
        [19, 32, 33, 34, 25, 8],
        [18, 31, 36, 35, 26, 9],
        [17, 30, 29, 28, 27, 10],
        [16, 15, 14, 13, 12, 11]
    ];
let expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];

//https://dev.to/thepracticaldev/daily-challenge-59-snail-sort-1a6n
const snail = (arr) => {
    return arr.length > 1
        ? [
            ...arr.shift(),
            ...arr.map(e => e.pop()),
            ...arr.pop().reverse(),
            ...arr.reverse().map(e => e.shift())
        ].concat(arr.length ? snail(arr.reverse()) : [])
        : arr[0];
}
console.log(snail(test), "expected: " + expected);