
// array.filter()--------------------------------------------------------------------------------

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length >10);
//my understanding of this ^^ bit of code is this..
// i want to you go find something and bring it back if it matches the arguement, if it is what I am looking for
// breakdown...
// as a constant, as always(const)
// go look in the --array--, in the place called (words)
// then filter out, basically bring back (filter)
// each one of the items in the array (word)
// that is greater than (=>)
// the item's length, how many characters of the item, (word.length)
// that is more than (>)
// the amount i want--10-- (10).
// so, go look in that array, look through each word for any words that are longer than 10 characters
// and give it back to me. Thanks!
// technically, they say.. or the syntax is...
// filter(callbackFn)
// filter(callbackFn, thisArg) --this argument= thisArg

//The array.filter() method creates a filtered array from the original array using the condition from the provided function.


console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]


// array.map()-----------------------------------------------------------------------------------

const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);
// basically, make an array of items/numbers and create a map/formula to insert those items/numbers through

// technically, they say.. or the syntax is...
// map(callbackFn)
// map(callbackFn, thisArg) --this argument= thisArg

//The array.map() method iterates through each element of the original array using a given function and produces a new array. The original array is not modified. The new array is returned by the map() method. The new array will have the same number of elements as the original array.


console.log(map1);
// Expected output: Array [2, 8, 18, 32]

// array.reduce()--------------------------------------------------------------------------------

const array2 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4                                    //was originally array1, but changed due to above mentioned array1
const initialValue = 0;
const sumWithInitial = array2.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

// this one is harder for me to explain. basically, this..
// constantly, always (const)
// we are going to add up everything including what we started with (sumWithInitial)
// ps, look below, this will also be our final result
// anyway, back to above
// we are going to do this by adding what is in the array2 and the initialValue
// i really don't understand why it's called the reduce 

//The array.reduce() method is used to reduce the array to a single value. It executes a reducer function on each element of the array, resulting in a single output value. The reducer function takes four arguments: Accumulator, Current Value, Current Index, Source Array. The reducer function's returned value is assigned to the accumulator, whose value is remembered across each iteration throughout the array and ultimately becomes the final, single resulting value.


console.log(sumWithInitial);
// Expected output: 10

/////////////////////////////////////////////////////////////////////////////////////////////////
//CHECK YOUR UNDERSTANDING


// array.filter()
let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];
let namesB = names.filter(name => name.charAt(0) == 'B');

console.log(namesB)

// array.map()
//const array3 = [5, 8, 5, 8, 3]
//const map2 = array3.map(length);

let nameLengths = names.map((name) => name.length);
console.log(nameLengths)

// array.reduce()

let avelength = names.reduce((total, name) => total + name.length, 0) / names.length;
console.log(avelength)