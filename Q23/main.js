"use strict";
let car = 'subaru';
// test 1 : Equality comparison (true) //
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
// test 2 : strict Equality comparison (true) //
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');
// test 3 : not Equality comparison (false) //
console.log("Is car != 'subaru'? I predict false.");
console.log(car != 'subaru');
// test 4 : not  strict Equality comparison (false) //
console.log("Is car !== 'subaru'? I predict false.");
console.log(car !== 'subaru');
// test 5 : less than comparison (false) //
console.log("Is car < 'subaru'? I predict false.");
console.log(car < 'subaru'); // false (lexicographic comparision)
// test 6 : greater than comparison (false) //
console.log("Is car > 'subaru'? I predict false.");
console.log(car > 'subaru'); // false (lexicographic comparision)
// test 7 : less than  or equal comparison (true) //
console.log("Is car <= 'subaru'? I predict true.");
console.log(car <= 'subaru'); // true //
// test 8 : greater than or equal  comparison (true) //
console.log("Is car >= 'subaru'? I predict true.");
console.log(car >= 'subaru'); // true //
// test 9 : cheaking truthiness (true) //
console.log("Is car?  I predict true.");
console.log(car); // true //
// test 10 : cheaking falseiness (false) //
console.log("Is car?  I predict false.");
console.log(car); // false //
