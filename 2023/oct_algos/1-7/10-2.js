// given two sorted arrays that may have duplicate values, merge them and remove any duplicates
//                              a
var arr1 = [1, 3, 3, 5, 8, 10,];
//                              b
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];
// [1, 3, 5, 8, 10]

//                   i
var arrA = [1, 3, 4, 5];
//                   j
var arrB = [1, 3, 3, 5, 8, 10,];
// [1, 3, 4]

// 1. DRIVER 🚗
// 2. PRESENTER 🧑‍🏫
// 3. NAVIGATOR 🧭
function removeDuplicates(arr) {
    return arr.filter((n,index) => arr.indexOf(n) === index);
}

function mergeDedupe(arr1, arr2) {
const mergedArr = [...arr1, ...arr2]
const mergedAndDedupedArr = removeDuplicates(mergedArr)
console.log(mergedAndDedupedArr)
}
// try out some other tests
mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5]) // [ 1, 3, 4, 5, 8, 10 ]
mergeDedupe([2,3,3,5,8,10,12], [1,3,4,6]) // [1, 2, 3, 4, 5, 6, 8, 10, 12]