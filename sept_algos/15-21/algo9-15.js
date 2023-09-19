/* 
  Array: Mode
  
  Create a function that, given an array of ints,
  returns the int that occurs most frequently in the array.

  What if there are multiple items that occur the same number of time?
    - return all of them (in an array)
    - what if all items occur the same number of times?
      - return empty array
*/





const nums1 = [];
const expected1 = [];

const nums2 = [1];
const expected2 = [1];

const nums3 = [5, 1, 4];
const expected3 = [];

const nums4 = [5, 1, 4, 1];
const expected4 = [1];

const nums5 = [5, 1, 4, 1, 5];
const expected5 = [5, 1];

const nums6 = [6,4,3,2,7,8,8,8,8,8,8,3,3,3,1111,1111,1111,1111,1111,1111];
const expected6 = [8,1111];

const nums7 = [5,5,5,1,1,1,4,4,4];
const expected7 = [];


//  - order doesn't matter

/**
 * Finds the mode or all modes if there are more than one. The mode is the
 *    value which occurs the most times in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Test
 * @returns {Array<number>} Mode or modes in any order.
 */

/*****************************************************************************/

function mode(nums){
    var dict = {};
    var max = 0;
    for(var i = 0; i < nums.length; i++){
        if(dict.hasOwnProperty(nums[i])){
            dict[nums[i]] ++;
        }else{
            dict[nums[i]] = 1;
        }
        if(dict[nums[i]] > max){
            max = dict[nums[i]];
        }
    }
    var result = [];
    var same = true;

    for(key in dict){
        if(dict[key] == max){
            result.push(parseInt(key));
        }else{
            same = false
        }
    }
    if(same){
        return [];
    }
    return result;
}

console.log(mode(nums1) + ' expected ' + expected1)
console.log(mode(nums2) + ' expected ' + expected2)
console.log(mode(nums3) + ' expected ' + expected3)
console.log(mode(nums4) + ' expected ' + expected4)
console.log(mode(nums5) + ' expected ' + expected5)
console.log(mode(nums6) + ' expected ' + expected6)
console.log(mode(nums7) + ' expected ' + expected7)