const insertionSort = (arr) => {
    let j;
    for(let i = 1; i < arr.length; i++){
        const temp = arr[i]
        for(j = i-1;j >=0; j--){
            if(arr[j] > temp){
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr
}