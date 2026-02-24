"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chaiFlavours = ["masala", "ginger"];
const chaiPrice = [10, 20];
const rating = [4.5, 5];
const menu = [
    { name: "Masala", price: 20 },
    { name: "Ginger", price: 40 }
];
// Read only array
const cities = ["Punjab", "New Delhi"];
// Multidimensional array
const table = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
// Tuples
let chaiTuple;
chaiTuple = ["Masala", 20];
// chaiTuple = [20, 'Masala']; // This can't be written and moreover, there can only be fixed number of values ( here 2 )
const coOrdinates = [1, 2]; // This is a named tuple
/**Enums - Named set of constants */
// Used for restricting the choices of the user
var CupSize;
(function (CupSize) {
    CupSize[CupSize["Small"] = 0] = "Small";
    CupSize[CupSize["Medium"] = 1] = "Medium";
    CupSize[CupSize["Large"] = 2] = "Large"; // By default 2 assigned
    // To avoid this -- Declare values beforehand
})(CupSize || (CupSize = {}));
const size = CupSize.Large;
console.log(size);
var ChaiType;
(function (ChaiType) {
    ChaiType["MASALA"] = "masala";
    ChaiType["GINGER"] = "ginger";
})(ChaiType || (ChaiType = {}));
function makeChai(type) {
    console.log(`Making: ${type} chai`);
}
makeChai(ChaiType.GINGER);
makeChai(ChaiType.MASALA);
// Generally enum should be declared with the same datatypes - Using different datatypes is correct but not a good practice
// const enum
var Sugar;
(function (Sugar) {
    Sugar[Sugar["LOW"] = 1] = "LOW";
    Sugar[Sugar["MEDIUM"] = 2] = "MEDIUM";
    Sugar[Sugar["HIGH"] = 3] = "HIGH";
})(Sugar || (Sugar = {}));
const s = Sugar.HIGH;
console.log(s);
//# sourceMappingURL=Array,Enum,Tuples.js.map