// array
const myArr = [1, 2, 3,4,51]
const myHeors = ["shaktiman","naagraj"]
const myArI2 = new Array (1, 2, 3, 4)
// console.log (myArI2 [1]) ;


// Array methods

myArr.push(6,5);
// console.log(myArr.pop()); // REMOVE ELEMENT FROM BACK SIDE
// console.log(myArr.unshift("VIPIN")); // ADD ELEMENT FROM STARTING
// console.log(myArr);

// console.log(myArr.shift()); // REMOVE ELEMENT FROM STARTING POINT
// console.log(myArr);

let joinArr = myArr.join(); // CONVERT INTO THE STRING
// console.log(joinArr);

// console.log("typeof === ",typeof joinArr);

//In summary, splice() is used for modifying the original array by adding or removing elements, while slice() is used to create a new array containing a selected portion of the original array without modifying it.

const numbers = [1, 2, 3, 4, 5];
const removedElements = numbers.splice(1, 2); // Removes elements at index 1 and 2
// numbers is now [1, 4, 5], and removedElements is [2, 3]

console.log(removedElements)
console.log(numbers)

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const slicedColors = colors.slice(1, 4); // Creates a new array with elements from index 1 to 3
// slicedColors is ['blue', 'green', 'yellow'], colors is unchanged





