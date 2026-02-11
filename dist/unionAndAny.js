"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let subs = "1M";
// When you have actually told TS that this subs variable can hold both number and string type values.
let apiRequest = "pending"; // This means we creating our own datatypes
console.log(apiRequest);
// This apiRequest can have only three value -- pending, success and error and none other than that..
const orders = ["12", "20", "28", "42"];
let currentOrder; //Edited afterwords -- Before this was there --> // This makes currentOrder of type any -- which doesn't care what the datatype of this variable is 
// it can hold any type of value( string, number, boolean etc)
for (let order of orders) {
    if (order === '28') {
        currentOrder = order;
        console.log(currentOrder);
    }
    currentOrder = "11";
}
console.log(currentOrder);
//# sourceMappingURL=unionAndAny.js.map