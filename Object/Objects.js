let instructor ={
    name: "John",
    isInstructor: true,
    favoriteNumbers: [1, 2, 3, 4]   
}

// Object methods
console.log("******* Object Methods *********\n")

Object.keys(instructor) // returns an array of the keys in the object
console.log(Object.keys(instructor)+ "\n") // ["name", "isInstructor", "favoriteNumbers"]


Object.values(instructor) // returns an array of the values in the object
console.log(Object.values(instructor)+ "\n") // ["John", true, [1, 2, 3, 4]]

Object.entries(instructor) // returns an array of key-value pairs in the object
console.log(Object.entries(instructor)+ "\n") // [["name", "John"], ["isInstructor", true], ["favoriteNumbers", [1, 2, 3, 4]]]

Object.hasOwnProperty(instructor, "name") // returns true if the object has the specified property
console.log(Object.hasOwnProperty(instructor, "name")+ "\n") // true
console.log(Object.hasOwnProperty(instructor, "age")+ "\n") // false


// Big O of Object methods

// Object.keys() - O(n) where n is the number of keys in the object
// Object.values() - O(n) where n is the number of values in the object
// Object.entries() - O(n) where n is the number of key-value pairs in the object
// Object.hasOwnProperty() - O(1) as it checks for a specific property in the object


// Object Iteration
console.log("******* Object Iteration *********\n")

for (let key in instructor) {
    console.log(`key: ${key} , value: ${instructor[key]}`) // logs the keys and values of the object
}
