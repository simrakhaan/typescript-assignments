"use strict";
let guest_List = ["huzaifa", "faizan", "urooj", "zaid"];
let notPresent = "huzaifa";
let newGuest = "zaid";
guest_List[1] = newGuest;
for (let i = 0; i < guest_List.length; i++) {
    console.log(`Respected Sir/Madam ` + guest_List[i] + `,\nWe invited you on dinner tomorrow . \n\nThank You`);
}
guest_List.unshift("rimla", "nimra", "kinza");
for (let i = 0; i < guest_List.length; i++) {
    console.log(`Respected Sir/Madam ` + guest_List[i] + `,\nWe invited you on dinner tomorrow we found big table so we decide to invite 3 more .\n\nThank You`);
}
