let car : string = 'subaru';
let age : number = 25;
let numbers : number[] = [1 , 2 , 3 , 4];


//// for test EQUALITY (true) ////

console.log("Is car == 'subaru' ? I pridict true")
console.log(car == 'subaru');


//// for strict EQUALITY (false) ////

console.log("Is car !== 'subaru'? i predict false.")
console.log(car !== 'subaru');


//// Inequality (true) /////

console.log("Is car != 'toyota'? I predict true.")
console.log(car != 'toyota');


///// inequality (false) ////
console.log("Is car !== 'subaru'? I predict false.")
console.log(car !== 'subaru');


///// lowercase conversion (true)
console.log("Is car.toLowerCase() == 'subaru'? I predict true.");
console.log(car.toLowerCase() == 'subaru');


///// lowercase conversion (false)
console.log("Is car !== car.tolowercase()? I predict false.");
console.log(car !== car.toLowerCase());


///// equality (true) ////
console.log("Is age == 25? I predict true.")
console.log(age == 25);

////// inequality /////
console.log("Is age != 30? I predict true.")
console.log(age != 30);

/// greater then (false)
console.log("Is age > 30? I predict false.")
console.log(age > 30);

/// less than or equal (true)
console.log("Is age <= 25? i predict true");
console.log(age <= 25); 


//// AND (true) ///
console.log("Is age > 20 && age < 30? Ipredict true.")
console.log(age > 20 && age < 30);


//// OR(false)  ////
console.log("is age > 30 || age <18? Ipredict false.")
console.log(age > 30 || age < 18);



//// array test /////

/// in array(true)
console.log("Is 3 in numbers ? I presict true.");
console.log(3 in numbers);

