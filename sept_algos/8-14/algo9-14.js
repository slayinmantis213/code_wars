/* 
Given an int to represent how much change is needed
calculate the fewest number of coins needed to create that change,
using the standard US denominations
*/

const cents1 = 25;
// const expected1 = { quarter: 1 };

const cents2 = 50;
// const expected2 = { quarter: 2 };

const cents3 = 9;
// const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
// const expected4 = { quarter: 3, dime: 2, penny: 4 };

/**
* Calculates the fewest coins of the standard American denominations needed
*    to reach the given cents amount.
* - Time: O(?).
* - Space: O(?).
* @param {number} cents
* @param {string} sick
* @returns {Object<string, number>} - A denomination table where the keys are
*    denomination names and the value is the amount of that denomination
*    needed.
*/
function fewestCoinChange(cents) {
	const result = {
		25 : 0,
		10 : 0,
		5 : 0,
		1 : 0
	}
	while (cents > 0){
		if(cents >= 25){
			result[25] ++;
			cents -= 25;
		} 
		else if(cents >= 10){
			result[10] ++;
			cents -= 10;
		} 
		else if(cents >= 5){
			result[5] ++;
			cents -= 5;
		} 
		else if(cents >= 1){
			result[1] ++;
			cents -= 1;
		}
	}
	return {'quarter': result[25], 'dime': result[10], 'nickle': result[5], 'penny': result[1]}
}
console.log(fewestCoinChange(cents1))
console.log(fewestCoinChange(cents2))
console.log(fewestCoinChange(cents3))
console.log(fewestCoinChange(cents4))


/* 
Given a SORTED array of integers, dedupe the array 
Because array elements are already in order, all duplicate values will be grouped together.

Ok to use a new array

Bonus: do it in O(n) time (no nested loops, new array ok)
Bonus: Do it in-place (no new array)
Bonus: Do it in-place in O(n) time and no new array
*/

const nums1 = [1, 1, 1, 1];
const expected1 = [1];

const nums2 = [1, 1, 2, 2, 3, 3];
const expected2 = [1, 2, 3];

const nums3 = [1, 1, 2, 3, 3, 4];
const expected3 = [1, 2, 3, 4];

const nums4 = [1, 1];
const expected4 = [1];

/**
* De-dupes the given sorted array.
* - Time: O(?).
* - Space: O(?).
* @param {Array<number>} nums
* @returns {Array<number>} The given array deduped.
*/
function dedupeSorted(nums) {
	var dict= {};
	for(var i = 0; i < nums.length; i++){
		if(dict.hasOwnProperty(nums[i])){
			dict[nums[i]] ++;
		}else{
			dict[nums[i]] = 0;
		}
	}
	for(key in dict){

	}
}

/*****************************************************************************/

str = "pet/mon name"
console.log(str.toUpperCase())