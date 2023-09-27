var arr1 = [5, 2, 0, 6, 4, 1]
var arr2 = [5, 2, 0, 6, 4, 1]
var arr3 = [6,6,6,6,6,6,1,2,3,4,5]


const selectionSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++){ 
        min = i;
        for (let j = i + 1; j < arr.length; j++){   
            if(arr[j] < arr[min]){  
                min = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
}

console.log(selectionSort(arr3))