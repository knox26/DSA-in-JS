// Big O for Arrays


// Accessing an element by index - O(1) as it takes constant time to access an element by its index


// Adding an element to the end of the array - O(1) as it takes constant time to add an element to the end of the array
// Removing an element from the end of the array - O(1) as it takes constant time to remove an element from the end of the array

// Adding or removing an element from the beginning of the array - O(n) as it takes linear time to shift all elements in the array

// Searching for an element in the array - O(n) as it takes linear time to search for an element in the array

// Iterating through the array - O(n) as it takes linear time to iterate through all elements in the array


// Array methods
let numbers = [1, 2, 3, 4, 5]

// Array methods
console.log("******* Array Methods *********\n")

numbers.push(6) // adds an element to the end of the array
console.log(numbers + "\n") // [1, 2, 3, 4, 5, 6]

numbers.pop() // removes an element from the end of the array
console.log(numbers + "\n") // [1, 2, 3, 4, 5]

numbers.unshift(0) // adds an element to the beginning of the array
console.log(numbers + "\n") // [0, 1, 2, 3, 4, 5]

numbers.shift() // removes an element from the beginning of the array
console.log(numbers + "\n") // [1, 2, 3, 4, 5]

numbers.indexOf(3) // returns the index of the first occurrence of the specified element in the array
console.log(numbers.indexOf(3) + "\n") // 2

numbers.includes(4) // returns true if the array contains the specified element
console.log(numbers.includes(4) + "\n") // true
console.log(numbers.includes(6) + "\n") // false

// Splice method - adds or removes elements from the array
numbers.splice(2, 1) // removes 1 element at index 2
console.log(numbers + "\n") // [1, 2, 4, 5]

numbers.splice(2, 0, 3) // adds 3 at index 2 without removing any elements
console.log(numbers + "\n") // [1, 2, 3, 4, 5]