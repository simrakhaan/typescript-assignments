function describe_city(nameOfCity: string, country: string = "pakistan"){
     return `${nameOfCity} is in ${country}`;
};

// 3 cities

let city1 = describe_city("karachi");
let city2 = describe_city("larkana");
let city3 = describe_city("hyderabad");
let city4 = describe_city("islamabad");

console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);


