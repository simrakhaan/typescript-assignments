"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let current_user = ["saba", "admin", "huzaifa", "raza", "simra"];
let new_user = ["fahad", "hussain", "admin", "saba", "faizi"];
new_user.forEach((newUser) => {
    if (current_user.some((currentUser) => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will  need to enter a new username.`);
    }
    else {
        console.log(`${newUser} is available. `);
    }
});
