"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = ["anek wala jin", "rmeez", "crish"];
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + "the great";
    }
}
//make_great(magicians); /// modifies the orignal array
show_magicians(magicians); /// shows modified names
