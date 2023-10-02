let testArr = [3,7,1,10,5,2,12,50,25,49,67,80,75,42,22,19,13]

function mergeSortedArrays(arr1, arr2) {
    let sortedArray = [];
    let l = 0;
    let r = 0;

    while (arr1.length > l && arr2.length > r) {
        if (arr1[l] < arr2[r]) {
            sortedArray.push(arr1.shift());
        } else {
            sortedArray.push(arr2.shift());
        };
    };
    return [...sortedArray, ...arr1, ...arr2]
}

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    
    return mergeSortedArrays(
        mergeSort(left),
        mergeSort(right)
    )
}

console.log(mergeSort([16,15,9,6,14,11]))