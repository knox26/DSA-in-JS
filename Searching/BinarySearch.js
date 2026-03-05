//Intuation: 
//1.check if array is sorted or not
//2.if sorted compare the target with the middle element of the array
//3.we will use loop while(left <= right) to keep searching for the target until we find it or we exhaust the search space
//3.if target is equal to the middle element return the index of the middle element
//4.if target is less than the middle element search for the target in the left half of the array
//5.if target is greater than the middle element search for the target in the right half of the array






function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {

        let mid = left + Math.floor((right - left) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        if (arr[mid] < target) {
            left = mid + 1;
        } 
        else {
            right = mid - 1;
        }
    }

    return -1;
}
