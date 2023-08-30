/* 
  String Encode

  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears. 
  
  
  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
  */

const str1 = "aaaabbcddd";
const expected1 = "a4b2c1d3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "bbcc";

const str5 = "aaaabbcdddaaa";
const expected5_bonus = "a4b2c1d3a3";
const expected5 = "a7b2c1d3";

/**
 * Encodes the given string such that duplicate characters appear once followed
 * by a number representing how many times the char occurs. Only encode strings
 * when the result yields a shorter length.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str The string to encode.
 * @returns {string} The given string encoded.
 */

function encodeStr(str) {
    var result = '';
    var count = 0;
    var char = str[0]
    for(var i = 0; i < str.length; i++){
        if(str[i] == char && i != str.length-1){
            count ++;
        }
        else{
            if (i == str.length -1){
                count++
            }
            result += char;
            result += count;
            char = str[i];
            count = 1;
        }
    }
    if(result.length >= str.length){
        return str
    }
    return result
}
console.log(encodeStr(str5))

/*****************************************************************************/

/* 
  String Decode  
*/

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

const str2 = "a3b2c12d10";
const expected2 = "aaabbccccccccccccdddddddddd";

/**
 * Decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @returns {string} The given str decoded / expanded.
 */
function decodeStr(str) {
    var result = '';
    str.split('')
    for (i in str){
        
    }

}

/*****************************************************************************/