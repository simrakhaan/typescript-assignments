"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_sandwich(...items) {
    console.log(`make a sandwich with: ${items.join(',')}.`);
}
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");
