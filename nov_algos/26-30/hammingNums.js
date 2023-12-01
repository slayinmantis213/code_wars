// A Hamming number is a positive integer of the form 2i3j5k, for some non-negative integers i, j, and k.

// Write a function that computes the nth smallest Hamming number.

// Specifically:

// The first smallest Hamming number is 1 = 203050
// The second smallest Hamming number is 2 = 213050
// The third smallest Hamming number is 3 = 203150
// The fourth smallest Hamming number is 4 = 223050
// The fifth smallest Hamming number is 5 = 203051
// The 20 smallest Hamming numbers are given in the Example test fixture.

// Your code should be able to compute the first 5 000 ( LC: 400, Clojure: 2 000, Haskell: 12 691, NASM, C, D, C++, Go and Rust: 13 282 ) Hamming numbers without timing out.


// chat gpt 
function hammingNumber(n) {
    let hammingNumbers = [1]; // Initialize the list with the first Hamming number

    // Initialize pointers for each prime factor
    let i = 0, j = 0, k = 0;

    while (hammingNumbers.length < n) {
        // Calculate the next possible Hamming numbers
        let next2 = hammingNumbers[i] * 2;
        let next3 = hammingNumbers[j] * 3;
        let next5 = hammingNumbers[k] * 5;

        // Find the smallest next Hamming number
        let nextHamming = Math.min(next2, next3, next5);

        // Update the pointers based on the chosen factor
        if (nextHamming === next2) {
            i++;
        }
        if (nextHamming === next3) {
            j++;
        }
        if (nextHamming === next5) {
            k++;
        }

        // Add the next Hamming number to the list
        hammingNumbers.push(nextHamming);
    }

    return hammingNumbers[n - 1];
}

// Example usage:
console.log(hammingNumber(5)); // Output: 5
console.log(hammingNumber(20)); // Output: 36