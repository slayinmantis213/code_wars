/* 
    This is an actual interview algorithm given to a Coding Dojo alum

    Find Consecutive Sums

    You are given arr, a list of positive integers 0-255
    You are given k, a integer between 1-255

    Find all the consecutive groups of integers that add up to the value k
*/

// inputs:
// k = 16
// arr = [2, 5, 3, 6, 7, 0, 0, 23, 11]

output = [
    [2, 5, 3, 6],
    [3, 6, 7], //  3, 6, 7 appear consecutively, so they are included in the solution
    [3, 6, 7, 0],
    [3, 6, 7, 0, 0]
]

const interview = (target, array) => {
    let output = [];
    for(let i = 0; i < array.length; i++){ //loop through initial array
        let count = 0;  // variable to track consective sum
        let j = i;  // while loop iterator set to for loop iterator so the while loop starts at the same place
        while(j < array.length){ //terminate while loop if end of array is reached
            count += array[j]; //sum consecutive values
            if(count == target){
                output.push(array.slice(i, j+1)) //push section of array whose sum is equal to target (allows loop to continue and check for zeros)
            }
            if(count > target){  //terminate loop if sum of subarray exceeds target
                break;
            }
            j++; //iterate
        }
    }
    return output;
}

console.log(interview(16, [2, 5, 3, 6, 7, 0, 0, 23, 11]))

// create new arrays
// if no matches, return empty array
