/* 
  Zip Arrays into Map
  
  
  Given two arrays, create an associative array (aka hash map, an obj / dictionary) containing keys from the first array, and values from the second.

  Associative arrays are sometimes called maps because a key (string) maps to a value 
 */

const keys1 = ["abc", 3, "yo"];
const vals1 = [42, "wassup", true];




// const expected1 = {
//     abc: 42,
//     3: "wassup",
//     yo: true,
// };

const keys2 = [];
const vals2 = [];
const expected2 = {};

const keys3 = ["Yup", 55, "Infinity", "Nope", "Soup", "Rats", "Rat Soup"]
const vals3 = ["Uhhuh", true, "Cars", "Starvin", "Marvin", "14", "Hello"]


//BONUS: Allow the arrays to be of different lengths!


/**
 * Converts the given arrays of keys and values into an object.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} keys
 * @param {Array<any>} values
 * @returns {Object} The object with the given keys and values.
 */
function zipArraysIntoMap(keys, values) {
    var dict = {};
    for (var i = 0; i < values.length; i++) {
        dict[keys[i]] = values[i];
    }
    return dict
}

console.log(zipArraysIntoMap(keys3, vals3))

/*****************************************************************************/
/* 
  Invert Hash

  A hash table / hash map is an obj / dictionary

  Given an object / dict,
  return a new object / dict that has the keys and the values swapped so that the keys become the values and the values become the keys
*/

const obj1 = { name: "Zaphod", charm: "high", morals: "dicey" };
// const expected1 = { Zaphod: "name", high: "charm", dicey: "morals" };

/**
 * Inverts the given object's key value pairs so that the original values
 * become the keys and the original keys become the values.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object<string, any>} obj
 * @return The given object with key value pairs inverted.
 */
function invertObj(obj) {
    var temp = '',  arr = [];
    for (key in obj){
        arr.push(key)
        temp = key;
        key = obj[key];
        obj[key] = temp;
    }
    for(var i = 0; i < arr.length; i++){
        delete obj[arr[i]];
    }
    return obj;
}
console.log(invertObj(obj1))
/*****************************************************************************/

function invertObj(obj){
    let new_obj = {};
    for (let key in obj) {
        let value = obj[key];
        new_obj[value] = key;
    }
    return new_obj;
}

console.log(invertObj(obj1))