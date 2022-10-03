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
doubleValues(numPattern);
function doubleValues(arr) {
  let doubleNumPattern = [];
  arr.forEach(function (value, index) {
    doubleNumPattern.push(value * 2);
  });
  // --- New array returned with doubled nums
  console.log(doubleNumPattern);
  return doubleNumPattern;
}
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
onlyEvenValues(randomNums);
function onlyEvenValues(arr) {
  let evenNums = [];
  arr.forEach(function (value, index) {
    if (value % 2 === 0) evenNums.push(value);
  });
  // -- New array returned with even nums
  console.log(evenNums);
  return evenNums;
}

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
showFirstAndLast(names);
function showFirstAndLast(arr) {
  let firstLast = [];
  arr.forEach(function (value, index) {
    firstLast.push(value[0] + value[value.length - 1]);
  });
  console.log(firstLast);
  return firstLast;
}
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
const team = [
  { name: 'Juan' },
  { name: 'Dave' },
  { name: 'Zach' },
  { name: 'Riley' },
  { name: 'Kate' },
];
addKeyAndValue(team, 'position', 'forward');
function addKeyAndValue(arr, key, pair) {
  let newArr = [];
  arr.forEach(function (value, index) {
    value = { ...value, [key]: pair };
    newArr.push(value);
  });
  console.log(newArr);
  return newArr;
}
// --------------------------------------------------
// 5. vowelCount
// --------------------------------------------------
// Write a function called vowelCount which accepts a
// string and returns an object with the keys as the
// vowel and the values as the number of times the vowel
// appears in the string. This function should be case
// insensitive so a lowercase letter and uppercase
// letter should count
// ++++++++++++++++++++++++++++++++++++++++++++++++++
// vowelCount('Elie') // {e:2,i:1};
// vowelCount('Tim') // {i:1};
// vowelCount('Matt') // {a:1})
// vowelCount('hmmm') // {};
// vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1}
// ++++++++++++++++++++++++++++++++++++++++++++++++++
console.log('a:5 ---------------------------------');
const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
const word = 'OtorrinolaringologiaAeee';
vowelCount(word);
function vowelCount(strng) {
  let newArr = [];
  [...strng].forEach(function (value, index) {
    if (value === 'a' || value === 'A') {
      newArr['a'] = (newArr['a'] || 0) + 1;
    } else if (value === 'e' || value === 'E') {
      newArr['e'] = (newArr['e'] || 0) + 1;
    } else if (value === 'i' || value === 'I') {
      newArr['i'] = (newArr['i'] || 0) + 1;
    } else if (value === 'o' || value === 'O') {
      newArr['o'] = (newArr['o'] || 0) + 1;
    } else if (value === 'u' || value === 'U') {
      newArr['u'] = (newArr['u'] || 0) + 1;
    }
  });
  console.log(newArr);
  return newArr;
}
// ==================================================
// >>>>>>>>>>>>>>>>>>>>> Map <<<<<<<<<<<<<<<<<<<<<<<<
// ==================================================
// 6. doubleValuesWithMap
// --------------------------------------------------
// Write a function called function doubleValuesWithMap(arr)
// {} which accepts an array and returns a new array
// with all the values in the array passed to the
// function doubled
// ++++++++++++++++++++++++++++++++++++++++++++++++++
// doubleValuesWithMap([1,2,3]) // [2,4,6]
// doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
// ++++++++++++++++++++++++++++++++++++++++++++++++++
console.log('a:6 ---------------------------------');
const congaNums = [12, 24, 48, 96, 92, 184, 368];
function doubleValuesWithMap(arr) {
  let newArr = arr.map(function (val, indx) {
    return val * 2;
  });
  return newArr;
}
console.log(doubleValuesWithMap(congaNums));
// --------------------------------------------------
// 7. valTimesIndex
// --------------------------------------------------
// Write a function called valTimesIndex which accepts
// an array and returns a new array with each value
// multiplied by the index it is currently at in the
// array.
// ++++++++++++++++++++++++++++++++++++++++++++++++++
// valTimesIndex([1,2,3]) // [0,2,6]
// valTimesIndex([1,-2,-3]) // [0,-2,-6]
// ++++++++++++++++++++++++++++++++++++++++++++++++++
console.log('a:7 ---------------------------------');
const workingNums = [2, 4, 6, 8, 10, 12, 14, 16, 18];
function valTimesIndex(arr) {
  let newArr = arr.map(function (v, i) {
    return v * i;
  });
  return newArr;
}
console.log(workingNums);
console.log(valTimesIndex(workingNums));
// --------------------------------------------------
// 8. extractKey
// --------------------------------------------------
// Write a function called extractKey which accepts an
// array of objects and some key and returns a new array
// with the value of that key in each object.
// ++++++++++++++++++++++++++++++++++++++++++++++++++
// extractKey(
//   [
//     {name: 'Elie'},
//     {name: 'Tim'},
//     {name: 'Matt'},
//     {name: 'Colt'}
//   ],
//   'name'
// )

// ['Elie', 'Tim', Matt', 'Colt']
// ++++++++++++++++++++++++++++++++++++++++++++++++++
console.log('a:8 ---------------------------------');
const groupNames = [
  { name: 'Juanita' },
  { name: 'Oscar' },
  { name: 'Pedro' },
  { name: 'Matias' },
  { name: 'Perla' },
  { name: 'Nigel' },
];
function extractKey(arr, data) {
  const newArr = arr.map(function (value, key) {
    return value[data];
  });
  return newArr;
}
console.log(extractKey(groupNames, 'name'));
// --------------------------------------------------
// 9. extractFullName
// --------------------------------------------------
// Write a function called extractFullName which accepts
// an array of objects and returns a new array with the
// value of the key with a name of “first” and the value
// of a key with the name of “last” in each object,
// concatenated together with a space.
// ++++++++++++++++++++++++++++++++++++++++++++++++++
// extractFullName([
//   {first: 'Elie', last:"Schoppik"},
//   {first: 'Tim', last:"Garcia"},
//   {first: 'Matt', last:"Lane"},
//   {first: 'Colt', last:"Steele"}
// ])
// ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
// ++++++++++++++++++++++++++++++++++++++++++++++++++
