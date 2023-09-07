/* 
  String: Rotate String

  Create a standalone function that accepts a string and an integer,
  and rotates the characters in the string to the right by that given
  integer amount.
*/

var str = "Hello World";

var rotateAmnt1 = 0;
// var expected1 = "Hello World";

var rotateAmnt2 = 1;
// var expected2 = "dHello Worl";

var rotateAmnt3 = 2;
// var expected3 = "ldHello Wor";

var rotateAmnt4 = 4;
// var expected4 = "orldHello W";

var rotateAmnt5 = 13;
// var expected5 = "ldHello Wor";

// BONUS: 
// What happens if we rotate it a billion times? Is there a fast way to do that?

/* 
Explanation: this is 2 more than the length so it ends up being the same
as rotating it 2 characters because after rotating every letter it gets back
to the original position.
*/

/**
 * Rotates a given string's characters to the right by the given amount,
 * wrapping characters to the beginning.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @param {number} amnt The amount of characters in the given str to rotate to the
 *    right.
 * @returns {string} The string rotated by the given amount.
 */
function rotateStr(str, amnt) {
    if (amnt > str.length){
        amnt = Math.floor(amnt) % str.length;
    }
    str = str.split('')
    for(var j = 0; j < amnt; j++){
        var temp = str[str.length-1];
        for(var i = str.length-1; i >= 0; i--){
            str[i] = str[i-1]
        }
        str[0] = temp;
    }
    str = str.join('');
    return str;
}


console.log(rotateStr(str, 5))
/*****************************************************************************/

/* 
  Create the function isRotation(str1,str2) that
  returns whether the second string is a rotation of the first.
*/

var strA1 = "ABCD";
var strB1 = "CDAB";
// Explanation: if you start from A in the 2nd string, the letters are in the same order, just rotated
// var expected1 = true;

var strA2 = "ABCD";
var strB2 = "CDBA";
// Explanation: all same letters in 2nd string, but out of order
// var expected2 = false;

var strA3 = "ABCD";
var strB3 = "BCDAB";
// Explanation: same letters in correct order but there is an extra letter.
// var expected3 = false;

/**
 * Determines whether the second string is a rotated version of the first.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether the second string is a rotated version of the 1st.
 */
function isRotation(s1, s2) {
    if(s1.length == s2.length){
        return false;
    }
    s1 = s1.split('');
    s2 = s2.split('');
    var j = 0;
    while(j <= s1.length){
        for(var i = 0; i < s1.length; i++){
            var temp = s1[s1.length-1];
            for(var i = s1.length-1; i >= 0; i--){
                s1[i] = s1[i-1]
            }
            s1[0] = temp;
        }
        if(s1 == s2){
            return true;
        }
    }
}

console.log(isRotation(strA2, strB2))

function isRotation(s1, s2) {
    if (s1.length !== s2.length || s1===s2){
        return false;
    }
    return (s1+s1).includes(s2)
}
console.log(isRotation(strA1,strB1))
console.log(isRotation(strA2,strB2))
console.log(isRotation(strA3,strB3))