"use strict";
let guest_List = ["huzaifa", "faizan", "urooj", "zaid"];
for (let i = 0; i < guest_List.length; i++) {
    console.log(`Respected Sir/Madam ` + guest_List[i] + `,\nWe invited you on dinner tomorrow.\n\nThank You`);
}
let notPresent = "huzaifa";
let newGuest = "zaid";
guest_List[1] = newGuest;
for (let i = 0; i < guest_List.length; i++) {
    console.log(`Respected Sir/Madam ` + guest_List[i] + `,\nWe invited you on dinner tomorrow.\n\nThank You`);
}
console.log(`Mr.${notPresent} will not coming tomorrow dinner.`);
