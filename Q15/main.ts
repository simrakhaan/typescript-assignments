let guest_List : string[]= ["huzaifa" , "faizan" , "urooj" , "zaid"];
for(let i=0; i<guest_List.length; i++){
    console.log(`Respected Sir/Madam ` + guest_List[i] + `,\nWe invited you on dinner tomorrow.\n\nThank You`);
}
let notPresent : string ="huzaifa";
let newGuest : string = "zaid";
guest_List[1] = newGuest;
for(let i=0; i<guest_List.length; i++){
    console.log(`Respected Sir/Madam ` + guest_List[i] + `,\nWe invited you on dinner tomorrow.\n\nThank You`);
}
console.log(`Mr.${notPresent} will not coming tomorrow dinner.`);