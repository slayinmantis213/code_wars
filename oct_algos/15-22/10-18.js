/*
  Interview Question:
  Given a string
  return whether or not it's possible to make a palindrome out of the string's characters
  What is it about a string that makes it possible for it to be a palindrome?
  Determine whether or not it is possible for the string's characters to be
  rearranged into a palindrome.
*/


// racecar
// radar
// tacocat
// levle
// kayak

const str1 = "";
const expected1 = false;

const str2 = "a";
const expected2 = true;

const str3 = "ddaa";
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
const expected4 = true;
// Explanation: "dad"

//                V
const str5 = "aadda";
const expected5 = true;
// Explanation: "daaad"


const str6 = "abc";
const expected6 = false;

//     v
// baabcceee

/* 
  For a string to be able to be re-ordered into a palindrome
  It must have an even occurrence of every character
  Unless it is odd length, then it can have 1 character that
  can have an odd number of occurrences.
  Another way to look at it would be, if you cancel out ever char that has a pair,
  it can be a palindrome if you are left with 0 or 1 char remaining:
    - "dad" the "d" cancels with itself to leave "a"
    - "daad" the "d" and "a" cancel with itself to leave nothing
    - "daam" the "a" cancels with itself leaving "dm", more than 1 char remaining, can't be palindrome
*/

function canBecomePalindrome(str) {
    const map = {}; //create hash map to track stuff
    const len = str.length; //for my hands
    let values; 
    if(len === 1){
        return true;
    }               //edge cases
    if(len === 0){
        return false;
    }
    for(let char of str){   //loop through string recording all characters and their number of occurances in hash map
        if(map.hasOwnProperty(char)){
            map[char] ++;
        }
        else{
            map[char] = 1;
        }
    }
    if(len % 2 === 0){   //check if string length is even
        values = Object.values(map);
        for(let v of values){  //loop through hash map values checking if even
            if(v % 2 !== 0){
                return false; //if odd return false
            }
        }
    }
    else{
        let count = 0;//track number of odd values in hash map
        values = Object.values(map);
        for(let v of values){
            if(v % 2 !== 0){
                count++;
            }
            if(count > 1){//if more than one odd value return false
                return false;
            }
        }
    }
    return true;//fin
}
console.log(canBecomePalindrome(str1));
console.log(canBecomePalindrome(str2));
console.log(canBecomePalindrome(str3));
console.log(canBecomePalindrome(str4));
console.log(canBecomePalindrome(str5));
console.log(canBecomePalindrome(str6));


// console.log(canBecomePalindrome(str1) === expected1); // false
// console.log(canBecomePalindrome(str2) === expected2); // true
// console.log(canBecomePalindrome(str3) === expected3); // true
// console.log(canBecomePalindrome(str4) === expected4); // true
// console.log(canBecomePalindrome(str5) === expected5); // true
