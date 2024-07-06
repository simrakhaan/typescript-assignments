"use strict";
let guest_List = ["huzaifa", "faizan", "urooj", "zaid"];
let notPresent = "huzaifa";
let newGuest = "zaid";
guest_List[1] = newGuest;
guest_List.unshift("rimla", "nimra", "kinza");
console.log(`\nUnfortunetly we can not arrange big table , only two people for dinner.`);
while (guest_List.length > 2) {
    let remove_guest = guest_List.pop();
    console.log(`sorry Sir/Madam.${remove_guest}you are not invited for dinner .`);
}
for (let i = 0; i < guest_List.length; i++) {
    console.log('respected Sir/Madam ' + guest_List[i] + ',\n yes you are still invited on tomorrow dinner\nthank you\n');
}
guest_List.splice(0, 2);
console.log(guest_List);
