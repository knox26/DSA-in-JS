//Bubble Sort

// 1. Start from the first element.
// 2. Compare the current element with the next element.
// 3. If the current element is greater, swap them.
// 4. Move to the next pair.
// 5. Repeat until the end of the array.
// 6. After each pass, the largest element moves to the end.
// 7. Repeat the process for remaining elements.




function bubbleSort(arr){

    let n = arr.length;

    for(let i = 0; i < n; i++){

        for(let j = 0; j < n - i - 1; j++){

            if(arr[j] > arr[j+1]){

                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;

            }
        }
    }

    return arr;
}

let arr = [64, 34, 25, 12, 22, 11, 90];

console.log("Original array: " + arr);

console.log("Sorted array: " + bubbleSort(arr));           