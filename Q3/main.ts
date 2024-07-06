/// lower case 
let personName : string= "baber";
console.log("lowercase:" , personName.toLowerCase());

/// uper case
console.log("touppercase:" ,personName.toLocaleUpperCase());


/// title case
console.log("titlecase:" ,personName.replace(/\bw/g,c => c.toUpperCase()));