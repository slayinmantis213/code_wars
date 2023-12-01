/* 
  An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
  typically using all the original letters exactly once.

  Is there a quick way to determine if they aren't an anagram before spending more time?

  Given two strings
  return whether or not they are anagrams
*/

const strA1 = "yes";
const strB1 = "eys";
const expected1 = true;

const strA2 = "yes";
const strB2 = "eYs";
const expected2 = true;

const strA3 = "no";
const strB3 = "noo";
const expected3 = false;

const strA4 = "silent";
const strB4 = "listen";
const expected4 = true;

/**
 * Determines whether s1 and s2 are anagrams of each other.
 * Anagrams have all the same letters but in different orders.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether s1 and s2 are anagrams.
 */
function isAnagram(s1, s2) {
    var dict1 = {};
    var dict2 = {};
    s1 = s1.split('')
    s2 = s2.split('')
    if (s1.length != s2.length){
        return false;
    }
    for(var i = 0; i < s1.length; i++){
        var s1Char = s1[i].toUpperCase();
        var s2Char = s2[i].toUpperCase();
        if (dict1.hasOwnProperty(s1Char) == false){
            dict1[s1Char] = 1;
        }else{
            dict1[s1Char] ++;
        }
        if (dict2.hasOwnProperty(s2Char) == false){
            dict2[s2Char] = 1;
        }else{
            dict2[s2Char] ++;
        }
        
    }
    for(key in dict1){
        if(dict1[key] != dict2[key]){
            return false;
        }
    }
    return true;
}
console.log(isAnagram(strA4, strB4))

/*****************************************************************************/
