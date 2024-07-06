"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let users = ["sana", "babar", "saba", "taha", "admin"];
for (let user of users) {
    if (user === "admin") {
        console.log("hello admin, would you like to see a status repoort ?");
    }
    else {
        console.log(`hello ${user} , thank you for loging in again.`);
    }
}
