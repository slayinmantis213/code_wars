// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter.

// For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.


//mine
function firstNonRepeatingLetter(s) {
    const map = {};
    let lower = s.toLowerCase();
    for (let letter of lower) {
        if (map.hasOwnProperty(letter)) {
            map[letter] += 1;
        }
        else {
            map[letter] = 1;
        }
    }
    for (let letter of s) {
        if (map.hasOwnProperty(letter.toLowerCase())) {
            if (map[letter.toLowerCase()] == 1) {
                return letter;
            }
        }
    }
    return "";
}

console.log(firstNonRepeatingLetter("BbEAN"));

String.prototype.lastIndexOf()
// The lastIndexOf() method of String values searches this string and returns the index of the last occurrence of the specified substring.
// It takes an optional starting position and returns the last occurrence of the specified substring at an index less than or equal to the specified number.

//cw solution

function firstNonRepeatingLetter(s) {
    let str = s.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            return s[i];
        }
    }
    return "";
}

// "7777...8?!??!", exclaimed Bob, "I missed it again! Argh!" Every time there's an interesting number coming up, he notices and then promptly forgets.
// Who doesn't like catching those one-off interesting mileage numbers?

// Let's make it so Bob never misses another interesting number. We've hacked into his car's computer, and we have a box hooked up that reads mileage numbers.
// We've got a box glued to his dash that lights up yellow or green depending on whether it receives a 1 or a 2 (respectively).

// It's up to you, intrepid warrior, to glue the parts together. Write the function that parses the mileage number input, and returns a 2 if the number is "interesting"
// (see below), a 1 if an interesting number occurs within the next two miles, or a 0 if the number is not interesting.

// Note: In Haskell, we use No, Almost and Yes instead of 0, 1 and 2.

// "Interesting" Numbers
// Interesting numbers are 3-or-more digit numbers that meet one or more of the following criteria:

// Any digit followed by all zeros: 100, 90000
// Every digit is the same number: 1111
// The digits are sequential, incementing†: 1234
// The digits are sequential, decrementing‡: 4321
// The digits are a palindrome: 1221 or 73837
// The digits match one of the values in the awesomePhrases array
// † For incrementing sequences, 0 should come after 9, and not before 1, as in 7890.
// ‡ For decrementing sequences, 0 should come after 1, and not before 9, as in 3210.

// So, you should expect these inputs and outputs:

// "boring" numbers
// isInteresting(3, [1337, 256]);    // 0
// isInteresting(3236, [1337, 256]); // 0

// progress as we near an "interesting" number
// isInteresting(11207, []); // 0
// isInteresting(11208, []); // 0
// isInteresting(11209, []); // 1
// isInteresting(11210, []); // 1
// isInteresting(11211, []); // 2

// nearing a provided "awesome phrase"
// isInteresting(1335, [1337, 256]); // 1
// isInteresting(1336, [1337, 256]); // 1
// isInteresting(1337, [1337, 256]); // 2
// Error Checking
// A number is only interesting if it is greater than 99!
// Input will always be an integer greater than 0, and less than 1,000,000,000.
// The awesomePhrases array will always be provided, and will always be an array, but may be empty. (Not everyone thinks numbers spell funny words...)
// You should only ever output 0, 1, or 2.

function isInteresting(number, awesomePhrases) {
    if (number + 2 < 99) {
        return 0;
    }
    for (let x of awesomePhrases) {
        if (x === number) {
            return 2;
        }
        if (x === number + 2 || x === number + 1) {
            return 1;
        }
    }
    let string = String(number)
    if (isSequential(string)) {
        return 2;
    }
    if (isSequential(String(number + 2)) || isSequential(String(number + 2))) {
        return 1;
    }
    if (isPal(string)) {
        return 2;
    }
    if (isPal(String(number + 2)) || isPal(String(number + 1))) {
        return 1;
    }
    let digits1 = String(number).split('').map(Number);
    let digits2 = String(number + 1).split('').map(Number);
    let digits3 = String(number + 2).split('').map(Number);
    if (digits1.every(e => e === digits1[0])) {
        return 2;
    }
    if (digits2.every(e => e === digits2[0]) || digits3.every(e => e === digits3[0])) {
        return 1;
    }
    if (allZero(digits1)) {
        return 2
    }
    if (allZero(digits2) || allZero(digits3)) {
        return 1
    }
    return 0;
    // Go to town!
}

function isSequential(string) {
    let result = true;
    for (let i = 1; i < string.length; i++) {
        const currentDigit = parseInt(string[i]);
        const previousDigit = parseInt(string[i - 1]);
        if (currentDigit !== previousDigit) {
            return false;
        }
    }
    return true;
}

function allZero(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] != 0) {
            return false;
        }
    }
    return true;
}

function isPal(string) {
    let j = string.length - 1;
    for (let i = 0; i < j; i++) {
        if (string[i] != string[j]) {
            return false;
        }
        j--
    }
    return true
}

console.log(isInteresting(121, []));

// i give up

//chat gpt
function isInteresting(number, awesomePhrases) {
    function isPalindrome(numStr) {
        return numStr === numStr.split('').reverse().join('');
    }

    function isSequential(numStr, incrementing) {
        const step = incrementing ? 1 : -1;

        for (let i = 0; i < numStr.length - 1; i++) {
            const currentDigit = parseInt(numStr[i]);
            const nextDigit = parseInt(numStr[i + 1]);

            if (nextDigit !== (currentDigit + step + 10) % 10) {
                return false;
            }
        }

        return true;
    }

    function isInterestingNumber(num) {
        const numStr = num.toString();

        // Any digit followed by all zeros
        if (/^(\d)0+$/.test(numStr)) {
            return true;
        }

        // Every digit is the same number
        if (/^(\d)\1+$/.test(numStr)) {
            return true;
        }

        // The digits are a palindrome
        if (isPalindrome(numStr)) {
            return true;
        }

        // The digits are sequential, incrementing
        if (isSequential(numStr, true)) {
            return true;
        }

        // The digits are sequential, decrementing
        if (isSequential(numStr, false)) {
            return true;
        }

        // The digits match one of the values in the awesomePhrases array
        if (awesomePhrases.includes(num)) {
            return true;
        }

        return false;
    }

    if (number < 100) {
        return 0;
    }

    if (isInterestingNumber(number)) {
        return 2;
    }

    if (
        isInterestingNumber(number + 1) ||
        isInterestingNumber(number + 2)
    ) {
        return 1;
    }

    return 0;
}

// Examples:
console.log(isInteresting(3, [1337, 256]));    // Output: 0
console.log(isInteresting(3236, [1337, 256])); // Output: 0
console.log(isInteresting(11207, []));         // Output: 0
console.log(isInteresting(11208, []));         // Output: 0
console.log(isInteresting(11209, []));         // Output: 1
console.log(isInteresting(11210, []));         // Output: 1
console.log(isInteresting(11211, []));         // Output: 2
console.log(isInteresting(1335, [1337, 256])); // Output: 1
console.log(isInteresting(1336, [1337, 256])); // Output: 1
console.log(isInteresting(1337, [1337, 256])); // Output: 2
