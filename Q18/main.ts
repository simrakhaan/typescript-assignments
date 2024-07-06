let places :string [] = ["NewYork" ,  "London" , "Paris" , "Pakistan" , "Dehli"];
console.log('orihnal :' + places) ;


// print your array is alphabeticaly order wihout modifying the actual list.//
console.log('copy :' + [...places] .sort());


// print your array in original form ///
console.log('orihnal :' + places) ;

// print your array in reverse alphabetical order //
console.log('copy :' + [...places] .sort().reverse());

// show that your array is still in its orignal order //
console.log('copy :' + [...places] .sort().reverse());

// reverse the order of your list .print the array to show that its order has changed .//
console.log('orihnal :' + places.sort()) ;

console.log('orihnal :' + places.sort().reverse()) ;