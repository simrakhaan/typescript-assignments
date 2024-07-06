function make_Album(artistName :string , albumTitle :string){
    return{artistName , albumTitle}
}

let album1 = make_Album("Ali", "rang-e-mohabat");
let album2 = make_Album("madad", "roshan andhera");
let album3 = make_Album("ayaz" , "mausam-e-dil");

console.log(album1);
console.log(album2);
console.log(album3);

/// number of tracks 
function make_Album2(artistName :string , albumTitle :string , numberOfTracks? : number ){
    return{artistName , albumTitle , numberOfTracks}
};

let album4 = make_Album2("hamza", "dil hai" , 30);
let album5 = make_Album2("madad", "ajeeb kahani" , 55);
let album6 = make_Album2("baber" , "typescriptki coding" );

console.log(album4);
console.log(album5);
console.log(album6);