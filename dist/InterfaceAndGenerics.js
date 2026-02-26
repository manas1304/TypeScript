"use strict";
/**Interfaces */
// Interface's main goal is to give shape to your object and not put any data inside it
Object.defineProperty(exports, "__esModule", { value: true });
const masala = {
    flavour: "Masala",
    price: 30
};
const machine = {
    start() {
        console.log('Start');
    },
    stop() {
        console.log('Stop');
    }
};
const ratings = {
    masala: 4.5,
    ginger: 4.7
};
const u = {
    name: "Manas",
    age: 22
};
;
/** Generics */
// Reusable components that work with multiple types instead of a single one
function wrapInArray(item) {
    return [item];
}
console.log(wrapInArray("Hello World")); // String hello world will be printed inside the array on console
console.log(wrapInArray(1)); // 1 inside array will be printed on the console
// Multiple type parameter generics
function pair(a, b) {
    return [a, b];
}
// Here A and B are the types like number or string 
// a and b are the actual values like 10 and 'Manas'
console.log(pair("Manas", 1));
console.log(pair(1, { name: "Manas" }));
const res = {
    status: 200,
    data: { flavour: "Hello World" }
};
console.log(res);
//# sourceMappingURL=InterfaceAndGenerics.js.map