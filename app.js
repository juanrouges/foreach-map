// ==================================================
// >>>>>>>>>>>>>>>>>>> ForEach <<<<<<<<<<<<<<<<<<<<<<
// ==================================================
// 1. doubleValues
// --------------------------------------------------
// Write a function called doubleValues which accepts 
// an array and returns a new array with all the 
// values in the array passed to the function doubled
// ++++++++++++++++++++++++++++++++++++++++++++++++++
// doubleValues([1,2,3]) // [2,4,6]
// doubleValues([5,1,2,3,10]) // [10,2,4,6,20]
// ++++++++++++++++++++++++++++++++++++++++++++++++++
console.log('a:1 ---------------------------------');
const numPattern = [2, 4, 8, 16, 32, 64, 128];
let doubleNumPattern = [];
numPattern.forEach(function(value, index){
  doubleNumPattern.push(value * 2);
});
// --- New array returned with doubled nums
console.log(doubleNumPattern);
// --------------------------------------------------
// 2. onlyEvenValues
// --------------------------------------------------
// Write a function called onlyEvenValues which accepts 
// an array and returns a new array with only the even 
// values in the array passed to the function
// ++++++++++++++++++++++++++++++++++++++++++++++++++
// onlyEvenValues([1,2,3]) // [2]
// onlyEvenValues([5,1,2,3,10]) // [2,10]
// ++++++++++++++++++++++++++++++++++++++++++++++++++
console.log('a:2 ---------------------------------');
const randomNums = [3, 5, 7, 8, 9, 10, 12, 16, 19, 21, 32, 45, 67, 68];
let evenNums = [];
randomNums.forEach(function(value, index){
  if (value % 2 === 0) evenNums.push(value);
});
// -- New array returned with even nums
console.log(evenNums);
// --------------------------------------------------
// 3. showFirstAndLast
// --------------------------------------------------
// Write a function called showFirstAndLast which accepts 
// an array of strings and returns a new array with only 
// the first and last character of each string.
// ++++++++++++++++++++++++++++++++++++++++++++++++++
// showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
// showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']
// ++++++++++++++++++++++++++++++++++++++++++++++++++
console.log('a:3 ---------------------------------');
const names = ['martina', 'carolina', 'juan', 'toto', 'wito', 'tita'];
let firstLast = [];
names.forEach(function(value, index){
  firstLast.push(value[0] + value[value.length - 1]);
});
console.log(firstLast);
// --------------------------------------------------
// 4. addKeyAndValue
// --------------------------------------------------
// Write a function called addKeyAndValue which accepts 
// an array of objects, a key, and a value and returns 
// the array passed to the function with the new key and 
// value added for each object
// ++++++++++++++++++++++++++++++++++++++++++++++++++
// addKeyAndValue(
//   [
//     {name: 'Elie'},
//     {name: 'Tim'},
//     {name: 'Matt'},
//     {name: 'Colt'}
//   ],
//     'title',
//     'instructor'
//   )  
  /*
    [
      {name: 'Elie', title:'instructor'},
      {name: 'Tim', title:'instructor'},
      {name: 'Matt', title:'instructor'},
      {name: 'Colt', title:'instructor'}
    ]
  */
// ++++++++++++++++++++++++++++++++++++++++++++++++++
console.log('a:4 ---------------------------------');
